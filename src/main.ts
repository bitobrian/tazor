import { parseTazorFile } from './parser';
import { compileComponent, transpileTypeScript } from './compiler';

async function loadComponent() {
    const response = await fetch('/src/components/Counter.tazor');
    const content = await response.text();

    const { html, code } = parseTazorFile(content);
    const compiledCode = compileComponent(html, code);
    const transpiledCode = transpileTypeScript(compiledCode);

    console.log('Transpiled Code:', transpiledCode); // Debugging statement

    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = transpiledCode;
    document.body.appendChild(script);

    script.onload = () => {
        console.log('Script loaded'); // Debugging statement
        const Component = (window as any).Component;
        if (Component) {
            const container = document.getElementById('app');
            if (container) {
                new Component(container);
                console.log('Component instantiated'); // Debugging statement
            } else {
                console.error('Container element with id "app" not found.');
            }
        } else {
            console.error('Component class not found on window.');
        }
    };
}

loadComponent();
