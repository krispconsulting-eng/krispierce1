import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* Multi-page static build. Each HTML file is an entry; its single module
   script pulls in React (as a global for the design-system bundle), the
   design system, styles, and the site's component layers.
   Bundled output goes to dist/_assets so it never collides with the
   string-referenced images served from public/assets. */
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: '_assets',
    rollupOptions: {
      input: {
        index: 'index.html',
        engagement: 'engagement/index.html',
        'engagement-expertise': 'engagement/expertise.html',
        'engagement-insights': 'engagement/insights.html',
        about: 'about.html',
        portfolio: 'portfolio.html',
        resources: 'resources.html',
        contact: 'contact.html',
        'techella-animation': 'techella-animation.html',
      },
    },
  },
});
