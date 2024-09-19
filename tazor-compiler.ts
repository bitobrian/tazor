export function compileTazorToJS(content: string): string {
    const [html, code] = content.split(/@code\s*{/);
    const cleanedCode = code ? code.replace(/}\s*$/, '').trim() : '';

    return `
        export class Component {
            constructor(container) {
                this.container = container;
                this.count = 0;
                this.initialize();
            }

            initialize() {
                this.container.innerHTML = \`${html.trim()}\`; // Render HTML

                ${cleanedCode}  // Insert logic from @code block

                if (this.setupEvents) {
                    this.setupEvents();
                }
            }
        }
    `;
}
