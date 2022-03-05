import { html } from 'lit';
// Ober-Klasse importieren
import { BaseView } from './base-view.js'; 


/* Extra View */
class StatsView extends BaseView {
  render() {
    return html`
      <h1>Stats View!</h1>
      <p>
        Some Stats
      </p>
    `;
  }
}

customElements.define('stats-view', StatsView);