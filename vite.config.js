import { defineConfig } from 'vite';
import tazorPlugin from './vite-plugin-tazor'; // Ensure the path is correct to your plugin

export default defineConfig({
    plugins: [tazorPlugin()],
    resolve: {
        // Ensure .tazor is treated like a module
        extensions: ['.js', '.ts', '.tazor'], 
    },
    esbuild: {
        // This is just to help ensure that non-standard extensions (like .tazor) are processed correctly.
        loader: 'ts',
        include: /\.tazor$/,
    },
});
