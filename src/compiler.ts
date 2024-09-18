import * as ts from 'typescript';

export function compileComponent(html: string, code: string): string {
    return `
        class Component {
            constructor(container) {
                this.container = container;
                this.initialize();
            }

            initialize() {
                console.log('Initializing component'); // Debugging statement
                this.container.innerHTML = \`${html}\`;
                ${code}
                this.setupEvents();
            }

            setupEvents() {
                console.log('Setting up events'); // Debugging statement
                // Example event setup based on @code
                const button = this.container.querySelector('button');
                if (button) {
                    button.addEventListener('click', this.incrementCount.bind(this));
                }
            }

            incrementCount() {
                console.log('Incrementing count'); // Debugging statement
                this.count++;
                this.container.querySelector('button').textContent = \`Clicked \${this.count} times\`;
            }
        }

        window.Component = Component; // Make Component available globally
        console.log('Component class added to window'); // Debugging statement
    `;
}

export function transpileTypeScript(code: string): string {
    const result = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.ESNext }
    });
    return result.outputText;
}
