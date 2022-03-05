import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from '@open-wc/building-rollup';
// import replace from '@rollup/plugin-replace';
import cpy from 'rollup-plugin-cpy';

// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',

  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  // legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  // 'index.html' ist 'entrypoint' für Rollup
  // any <script type="module"> inside will be bundled by rollup
  input: './index.html',
  /* Manifest muss in 'dist' kopiert werden, dort kann ihn der Browser finden  */
  plugins: [
    cpy([
      { files: 'src/**/*.webmanifest', dest: './dist/' },
    ])
  ]

  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',

});



// webmanifest muss in dist copiert sein
// 
// https://www.npmjs.com/package/rollup-plugin-cpy
// 