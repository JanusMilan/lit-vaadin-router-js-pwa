

# Lifecycle of a Service Worker
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers#lifecycle_of_a_service_worker
- Registration
- 'install' event
- 'activate' event
- 'fetch' event

# Registration
- IMMER in extra Datei, hier 'app.js'
- im selbstausführende Funktion

# 'install' event
- Pre-Caching von statischen Assets für App Shell

# 'activate' event
- löschen von alten Cache Versionen

# 'fetch' event
- Hier werden folgende Aufgabe erfüllt: 
  - Implementation 'Cache First' Startegie 
  - Implementation von 'dynamischen Caching' 
    - dafür muss eine Konstante als Cache Name definiert werden
  - Einbildung Fallback Page
- Hier agiert SW wie Proxy 
  - Fängt alle 'fetch' und je nach 'Cache First' Startegie verarbeitet diese 
- 'Cache First' Strategie 
  - Immer zuerst prüfen ob inhalt im Cache ist, unabhängig ob App offline oder online ist
- 'dynamischen Caching' parallel zum 'Cache First': HIER NICHT GEMACHT
  - https://www.youtube.com/watch?v=ChXgikdQJR8&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=18
  - beim ersten Aufrufen des Inhalts wird dieser in 'dynamischen Caching' gespeichert
  - es ist möglich zu bestimmen welsche Art von Inhalten soll in 
    'dynamische Cache' gespeichert werden
  - beim nächsten Aufruf wird dann 'Cache First' Strategie verfolgt 


  