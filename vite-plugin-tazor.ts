import fs from 'fs/promises';
import { Plugin } from 'vite';
import { compileTazorToJS } from './tazor-compiler';

export default function tazorPlugin(): Plugin {
    return {
        name: 'vite-plugin-tazor',
        
        // Resolve .tazor files
        resolveId(source) {
            if (source.endsWith('.tazor')) {
                return source;
            }
            return null;
        },
        
        // Load and transform .tazor files
        async load(id) {
            if (id.endsWith('.tazor')) {
                console.log(`Loading and compiling .tazor file: ${id}`);
                const code = await fs.readFile(id, 'utf-8');
                
                // Pass the Tazor code to the compiler
                const compiledCode = compileTazorToJS(code);
                
                return {
                    code: compiledCode,
                    map: null,
                };
            }
            return null;
        },
    };
}
