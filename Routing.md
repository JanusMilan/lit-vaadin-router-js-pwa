

# Ausgangslage
- Es wurde mit Webpack gearbeitet

# Version 1
- ohne Router
  
## Hier ist kein TypeScript
- es findet kein Transpileren statt
- also es entsteht kein 'src-out' Folder
- es ist kein Config 'tsconfig.json' nötig

## package.json
- bei der Scripten mussen TS Kompiler 'tsc' Scripten raus 
  aus dem 'build' und 'start' Scripten
- Aus Abhängigkeiten muss "typescript" raus

## Rollupp
- keine Änderung nötig 
- Input ist 'index.html'
- Ausgabe in 'dist' Folder

## 'index.html'
- Für Rollup und Web Server ist nötig die Angabe des JS Datei mit Haupt CE
  - <script type="module" src="./src/views/todo-view.js"></script>
  - es findet kein Transpileren statt also es entsteht kein 'src-out' Folder
- Für Browser ist wichtig: 
  - Angabe des JS Datei 'd75dbb35.js' in 'dist' Folder (build von Rollup)
  - CE Tag Angabe <todo-view></todo-view>

## 'index.js'
- Später wird hier Router implementiert werden 
- Momentan kommen hier nur Angaben für Web Server und Browser
  - import './src/styles.css';
  - import './src/views/todo-view';

