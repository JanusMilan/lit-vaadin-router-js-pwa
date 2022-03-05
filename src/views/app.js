
/* SW Registration */
(function() {
    'use strict';
    var workerScript = document.currentScript && document.currentScript.dataset.serviceWorker;
  
    if (workerScript && 'serviceWorker' in navigator) {
      console.log("console.log('[Service Worker] Register');");
      navigator.serviceWorker.register(workerScript);
    }
  })();