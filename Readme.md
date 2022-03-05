# LitElement and redux tutorial
- How to build apps with LitElement and redux tutorial
- https://github.com/vaadin-learning-center/lit-element-tutorial-pwa-and-offline
- https://vaadin.com/learn/tutorials/lit-element

# Anpassungen
- 'index.html' und 'index.js' sind raus aus dem 'src/'
- Es wird mit Rollup statt mit 'Webpack' gearbeitet
  - Mann muss dafür sogen dass Manifest in 'dist' kopiert wird
- 'package.json' wird aus anderen Vaadin Tutorium genommen und angespasst
  - Alles mit TS wird gelöscht das es hier JS Kode ist

# Arbeits-Weise beim Proggen
- wegen caching muss bei Änderung der statischen Assets die Cache Version geändert werden
- auch muss neue SW manuell gestartet werden und altes gestoppt werden
- ODER einfach 'instal' SW Event auskommentieren

