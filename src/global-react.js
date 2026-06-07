/* Exposes React + ReactDOM on window so the prebuilt design-system bundle
   (_ds_bundle.js, which references a global React) and the site's classic-style
   component files resolve the same single React instance the app is bundled with.
   Imported first in every page entry, before the design-system bundle. */
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

/* In the browser globalThis === window, so this is the global the design-system
   bundle reads as `React`. Using globalThis keeps it correct under any host. */
globalThis.React = React;
globalThis.ReactDOM = ReactDOMClient;
