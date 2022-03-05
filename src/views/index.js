// import '../styles.css';
import './base-view'
import './todo-view'

/* WICHTIG Nutzung von 'index.js':
- 'index.js' NICHT für SW Registrierung nutzen
- Nutzen für Rollup und Browser um 'import' zu regeln
- Nutzen für Routing
*/

import { Router } from '@vaadin/router';

/* ALLGEMEIN:
-  'base-view' ist Eltern CE
   - im 'base-view' sind Routing URLs im 'html' verbaut
     - href="/todo-view"
     - href="/stats-view"
   - Kinder Elemente werden über Router in Light Dom eingerendert
   - 'slot' ist NICHT notwendig da Sahdow Dom ausgeschaltet ist 
-  Kinder Elemente sind 'todo-view' und 'stats-view'
-  'index.html' 
   - Hier ist HTML Element mit id="outlet" wo 'base-view' über Router verbaut wird       
*/

/* Routing :
-  'base-view' ist Eltern CE
   - im 'base-view' sind Routing URLs im 'html' verbaut
   - Kinder Elemente werden über Router eingerendert
-  Kinder Elemente sind 'todo-view' und 'stats-view'
-  'index.html' 
   - Hier ist HTML Element mit id="outlet" wo 'base-view' über Router verbunden wird       
*/
const routes = [
  {
    path: '/',
    component: 'base-view',
    action: async () => {
      await import('./base-view');
    },
    children: [
      {
        path: 'todo-view',
        component: 'todo-view',
        action: async () => {
          await import('./todo-view');
        },
      },
      {
        path: 'stats-view',
        component: 'stats-view',
        action: async () => {
          await import('./stats-view');
        },
      },
    ]
  },
  /*  Alternativ zum 'Fallback.html' der über SW geroutet wird 
  - kann man auch über Router die 'not-found-view' als Fallback Route rendern 
  */
  /*   
  {
    path: '(.*)',
    component: 'not-found-view',
    action: async () => {
      await import('./not-found-view');
    },
  } 
  */
];

const outlet = document.getElementById('outlet');
// Router Klasse
export const router = new Router(outlet);
// Router Methode
router.setRoutes(routes);

