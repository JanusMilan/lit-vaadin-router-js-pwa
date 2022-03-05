// Da die Klasse die Oberklasse 'base-view' erbt, 
// muss man nicht noch mal 'LitElement' importieren  
import { html } from 'lit';
// 
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
// Ober-Klasse importieren
import { BaseView } from './base-view.js'; 

// Objekt für Task Filter Optionen  
const VisibilityFilters = {
    SHOW_ALL: 'All',
    SHOW_ACTIVE: 'Active',
    SHOW_COMPLETED: 'Completed'
};


////////////////////////////7
class TodoView extends BaseView  {
    
    // 'reactive' Property Definition über 'static properties field' nach LIT V2
    static properties = {
        todos: { type: Array },
        filter: { type: String },
        task: { type: String }
      };

    // default Wert für 'reactive' Properties
    constructor() {
        super();
        this.todos = [];
        this.filter = VisibilityFilters.SHOW_ALL;
        this.task = '';
        // registerSW();
    }


    // (1,2,3) Eingabe Feld und Button um Todos einzugeben und in eine Liste aufzufangen
    inputTemplate() {
        // (1.1) Div Container für App 
        // Hören '@keyup' Events am div um 'Enter' Eingabe aufzufangen
        // (1.2) Text-Field für Task Eingabe
        // Attribut 'value' hat nicht mit 'e.target.value'? 
        // Hören '@change' Events um Property 'this.task' upzudaten 
        // (1.3) Button   
        // Hören '@click' Events um Button Eingabe aufzufangen
        return html`
        <div class="input-layout"
        @keyup="${this.shortcutListener}"> 
        <!-- Text-Field für Task Eingabe -->
        <vaadin-text-field
            placeholder="Task"
            value="${this.task}" 
            @change="${this.updateTask}"> 
        </vaadin-text-field>
        
        <vaadin-button
            theme="primary"
            @click="${this.addTodo}"> 
            Add Todo
        </vaadin-button>
        </div>
      `;
    }

    // (2) 
    // (2.1) Die Liste 'todos' und ihren Zuständen in Checkbox darstellen 
    // (2.2) 'todo' updaten ob es fertig oder noch aktiv ist (über Setzen des Häckschen im Checkbox)
    // Array 'todos' wird gemappt: für jede 'todo' wird ein Checkbox erstellt 
    // Hören '@change' Events im Checkbox um Property 'todo' upzudaten 
    // Wenn aktuelle 'todo' über Häckschen im Checkbox auf 'checked' gesetzt ist dann wird 
    // er über Funktion 'updateTodoStatus' es als 'complete' in 'todos' eintragen
    // (2.3) wird wird wiederholt von map() neue Template erstellt und Haupt-Template eingebunden  
    // mit 'applyFilter' wird zuerst 
    listingTemplate() {
        return html`
                <div class="todos-list">
                    ${this.applyFilter(this.todos).map( todo => html` 
                                        <div class="todo-item">
                                            <vaadin-checkbox
                                                ?checked="${todo.complete}" 
                                                @change="${e => this.updateTodoStatus(todo, e.target.checked)}"> 
                                                    ${todo.task}
                                            </vaadin-checkbox>
                                        </div>
                                        `
                                    )
                    }
                </div>
            `;
    }

    // (3) 
    // Filtern von 'todo' 
    // (3.1) @value-changed um Update der 'filter' Property zu machen
    // Ansicht wird nach gewählten Status (All, Active oder Complete) gefiltert 
    // Mit mapp() werden die einzelne 'todo' als Unter- erzeugt und in Haupt-Temaplate einegefügt
    // ALLERDING funktiuoniert die nicht ohne Funktion 'applyFilter' die in oberem Block (2) 
    // erst später muss Code im oberem Block (2) angepasst werden 
    // Also ist 'applyFilter' eigentlich für Filtern zuständig aber genutzt wird Sie beim 
    // Darstellung der 'todos' und ihren Zuständen in Checkbox genutzt
    // also keine geradelinge sondern kreisartige Ansatz
    filterTemplate() {
        return html`
                <vaadin-radio-group
                class="visibility-filters"
                value="${this.filter}"
                @value-changed="${this.filterChanged}"> 
                    ${Object.values(VisibilityFilters).map( filter => html`
                                                                <vaadin-radio-button value="${filter}">
                                                                    ${filter}
                                                                </vaadin-radio-button>`
                                                    )}
                </vaadin-radio-group>

                <vaadin-button
                  @click="${this.clearCompleted}"> 
                     Clear completed
                </vaadin-button>
                `;
    }

    // <todo-view> ist 'host'
    // div '.input-layout' erfasst Eingabe-Feld und Eingabe Button
    // <vaadin-text-field> ist Eingabe-Feld
    // div '.todos-list' beinhaltet die divs '#todo-tem'
    // '.visibility-filters' sind eigentlich <vaadin-radio-group> 
    // --> also kann man sie auch so deklarieren statt mit ID 
    // --> da im App nur eine <vaadin-radio-group> vorhanden ist  
    styleTemplate() {
        return html`
        <style>
            :host  {  
                background-color: magenta;
                display: block;
                max-width: 800px;
                margin: 0 auto;
            }
            :host .input-layout {
                background-color: yellow;
                width: 100%;
                display: flex;
            }
            :host vaadin-text-field {
                background-color: orange;
                flex: 1;
                margin-right: var(--spacing); 
            }
            :host .todos-list {
                background-color: #92a8d1;
                margin-top: var(--spacing);
            }
            :host([has-label]) ::slotted(label) {
                color: red;
            }
            :host .visibility-filters {
                background-color: green;
                margin-top: calc(4 * var(--spacing));
            }
        </style>
        `;
    }

    // definieren Template Composition mithilfe der html Funktion  
    render() {
        return html`
            ${this.styleTemplate()}
            ${this.inputTemplate()}
            ${this.listingTemplate()}
            ${this.filterTemplate()}
        `;
    }

    // Lit Methode: HIER NUR für Kontrolle und Ausgabe der Reaktiven Properties
    updated(changedProperties) {
        // console.log('changedProperties', changedProperties)
    }
    

    // (1) Ermöglichen Eingabe ohne Button mit Enter 
    shortcutListener(e) {
        if (e.key === 'Enter') {
            this.addTodo();
        }
    }
    // (1.2) Updaten property 'this.task' 
    // 'value'  
    updateTask(e) {
        this.task = e.target.value;
    }
    // (1.3) neue ToDo einfügen 
    addTodo() {
        if (this.task) {
            // Neue Array [] einfügen, der aus alten Array '...this.todos' und neuem Task besteht   
            this.todos = [...this.todos, { task: this.task, complete: false }];
            this.task = '';
        }        
    }

    // (2) ToDo updaten 
    updateTodoStatus(updatedTodo, complete) {
        // Wenn im Checkbox Atributt 'checked' ist (duch Häckchen)
        // dann wird aktuelle 'todo' es als 'complete' in 'todos' eintragen
        this.todos = this.todos.map(todo => updatedTodo === todo ? { ...updatedTodo, complete } : todo
        );
    }

    // (3.1) @value-changed um Update der 'filter' Property zu machen
    // wechsel zwischen 'All', 'Active' und 'Completed'
    // somit kann man Ansicht der 'todos' filtern und nur todos mit bestimmten Zustand anzeigen
    filterChanged(e) {
        this.filter = e.target.value;
    }

    // (3.2) @click  
    clearCompleted() {
        // alle 'todo' die 'complete=true' sind werden aus 'todos' rausgefiltert  
        this.todos = this.todos.filter(todo => !todo.complete);
    }

    // (2.3)
    // Nutzung Block (2) für Darstellung 
    // aber es inheitlich gehört zum Block (3) Filtern wo es auch per Event gerufen wird 
    // Wird als Hilfe für Dartstellung der 'todos' und ihren Zuständen in Checkbox genutzt
    // Filtert die 'todos' nach Zustand und sicht reduzierte Liste zur Darstellung
    applyFilter(todos) { 
        switch (this.filter) {
          case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.complete);
          case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.complete);
          default:
            return todos;
        }
      }


}

customElements.define('todo-view', TodoView); 







