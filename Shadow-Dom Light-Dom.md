
# LIT 
- https://lit.dev/docs/components/shadow-dom/
- https://lit.dev/docs/v1/components/templates/

# CE
- https://fai.agency/blog/web-components-dom/
- https://javascript.works-hub.com/learn/web-components-api-shadow-dom-and-light-dom-e18b6
- https://javascript.info/slots-composition
- https://polymer-library.polymer-project.org/2.0/docs/devguide/shadow-dom


# Shadow DOM API 
Shadow DOM API is probably the most important API of Web Components. This API brings us encapsulation for both markup and styles. This means that our web component code and styles will not overlap with the rest of the elements of the page where the component belongs to. The encapsulation applies both to the web component on the outside as well as the page inside the web component. For this to be possible an independent DOM subtree (shadow DOM) is attached to the main DOM.
- If we execute a document.querySelector() we won't find any element of the web component.
- If we define some style for, let's say, a <div class="button">, and inside the web component 
  there was also a div with the same class, it would not be affected by the outside styles.

#  Light DOM 
- LightDOM is the other DOM tree along with ShadowDOM that defines web component's content. 
- we use the term "light DOM" to refer to nodes that appear in the main DOM tree.
- By default, if a custom element has light DOM children in HTML, they do not render at all:
  - <my-element>
  - <p>I won't render</p>
  - </my-element> 
- You can make them render using the <slot> element. 
- Shadow DOM supports <slot> elements, that are automatically filled by the content from light DOM.
- browser performs “composition”: it takes elements from the light DOM and renders them in corresponding slots of the shadow DOM. 
- Schlussfolgerung
  - Light DOM ist auch CE API
  - 

# shadow tree
- Shadow DOM lets you place the children in a scoped subtree, 
  so document-level CSS can't restyle the button by accident, for example. 
- This subtree is called a shadow tree
  - <my-header>
    - #shadow-root
      - <header>
        - <h1>
        - <button>
- The 'shadow root' is the top of the shadow tree: HIER '<header>'
- The element that the tree is attached to (<my-header>) is called the 'shadow host'. 
- The 'shadow host' has a property called 'shadowRoot' that refers to the 'shadow root' .  
- The 'shadow root'  has a 'host' property that identifies its 'shadow host' element.
- The shadow tree is separate from the element's children. 



# Render light DOM children with the slot element
- By default, if an element has shadow DOM, the shadow tree is rendered instead of the element's children. 
- To allow children to render, you can add a <slot> element to your shadow tree. 
- Think of the <slot> as a placeholder showing where child nodes will render
- The process of rendering slotted elements inside their slots is called “composition”.
- The result is called a “flattened DOM”.

# Shadow vs Light DOM
- While ShadowDOM points to the main content of the component and it's defined by the web component's developer
- LightDOM points to content that is not mandatory and it's defined by the person who is consuming our web component.

# Styling WebComponents 
- ShadowDOM
  - ::part() pseudo-element
  - :host-context selector
  - :host selector
  - :host selector and classes
  - CSS vars
- LightDOM
  - ::slotted() pseudo-selector