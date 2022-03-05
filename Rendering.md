
# Shadow Root deaktivieren 
- HIER wurde Shadow Root deaktiviert
  - createRenderRoot() { return this; }
- eine Möglichkeit die Kind CE in Light DOM einzubinden

# Einbinden von Kind über 'Light DOM' mit Router 
- IN DIESEM BEISPIEL WIRD SO GEMACHT
- Shadow Root/DOM deaktivieren um Kind CE in Light Dom zu tun  
  - createRenderRoot() { return this; }
  - das heißt das Shadow Root nicht mehr existiert
- hier werden die CEs WEDER im Tempalte 'html' NOCH im 'index.html' hart codiert
- im Eltern CE werden die Kinder CEs URLs verankert 
  auf welsche dann über Router weitergeleitet wird
  - <a href="/todo-view">Todo View </a>
  - path: 'todo-view', component: 'todo-view', action: import('./todo-view'); 
- dafür braucht man kein 'slot'
- dafür muss man kein CE in 'index.html' hart codieren



# Einbinden von Kind über 'Light DOM' mit Router und 'slot' 
- Hier muss man NICHT Shadow Root/DOM deaktivieren, 
  da Kind CE schon sowieso im Ligt DOm über 'slot' kommt
  - das heißt das Shadow Root bleibt nur Kind CE ist nicht drin
- im Tempalte 'html' wird 'slot' als Platzhater hart codiert
  - return html` <div> <slot></slot>  </div> `;
- im Eltern CE werden die KInder CEs URLs verankert 
  auf welsche dann über Router weitergeleitet wird
  - <a href="/todo-view">Todo View </a>

# Einbinden von Kind mit Shadow DOM ohne Router ohne 'slot' über 'html' Tempalte 
- Hier will man NICHT Shadow Root/DOM deaktivieren
- dafür braucht man kein 'slot'
- dafür braucht man kein Router  
- dafür braucht man keine URL Verankerung von Kindern im Eltern CE 
  - allerding sind CEs nicht ansprechbar es seit dem es sind Buttons und ähnliches
- im 'html' Tempalte 
  - return html` <div> <kind> </kind>  </div> `;


# Einbinden von Kind mit Shadow DOM ohne Router ohne 'slot' über 'index.html' Tempalte 
- Hier will man NICHT Shadow Root/DOM deaktivieren
- dafür braucht man kein 'slot'  
- dafür braucht man kein Router  
- dafür braucht man keine URL Verankerung von Kindern im Eltern CE 
  - allerding sind CEs nicht ansprechbar es seit dem es sind Buttons und ähnliches
- in 'index.html'
  -  <eltern> <kind> </kind>  </eltern> 