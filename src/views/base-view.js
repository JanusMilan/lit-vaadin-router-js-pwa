import { LitElement, html } from 'lit';


export class BaseView extends LitElement {
/* Light DOM aktivieren und Shadow DOM deaktivieren 
- Shadow Root aus dem CE <todo-view> rausnehmen und in Light DOM tun   
- Style aus Template deaktivieren
- Kind CE in Light DOM setzen
  - Hier kann man gewöhnliche Selctoren nutzen wie z.B. 'document.querySelector'
*/
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
          <h1>Wähle Unterseite!</h1>
          <!-- Die Links für Unterseiten werden NICHT im 'index.html' sondern im HIER verbaut -->
        <p>
          <a href="/">Start </a>
        </p>
        <p>
          <a href="/todo-view">Todo View </a>
        </p>
        <p>
          <a href="/stats-view">Stats View </a>    </p> 
          <!-- 'slots' bringen nichts da Kind CE sowieso schon im Light DOM ist -->   
          <slot></slot>
        `;
  }
}

customElements.define('base-view', BaseView);