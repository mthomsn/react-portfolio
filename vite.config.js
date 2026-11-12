import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // GitHub Pages serves the site from /react-portfolio/.
    // Change to '/' if you move to a custom domain.
    base: '/react-portfolio/',
    plugins: [react()],
    define: {
        __BUILD_DATE__: JSON.stringify(
            new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        ),
    },
});
