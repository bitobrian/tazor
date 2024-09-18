export function parseTazorFile(content: string): { html: string, code: string } {
    const [html, code] = content.split(/@code \{/);
    
    // Handle cases where @code block might be missing
    return {
        html: html.trim(),
        code: code ? code.replace(/}\s*$/, '').trim() : ''
    };
}
