
/*  Alternativ zum 'Fallback.html' der über SW geroutet wird 
- kann man auch über Router die 'not-found-view' als Fallback Route rendern 
*/

import { html } from 'lit';
// Ober-Klasse importieren
import { BaseView } from './base-view.js';

/* Ausfall Route '.*' für "not found" bei z.B. offline Betrieb */
class NotFoundView extends BaseView {
  render() {
    return html`
      <h1>View not found!</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);