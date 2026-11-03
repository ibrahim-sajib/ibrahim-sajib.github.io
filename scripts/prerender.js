// Writes the rendered app into dist/index.html so the page ships real HTML:
// crawlers, link previews and slow phones see content before any JavaScript runs.
// Runs after both builds in `npm run build`.
import { createHash } from 'node:crypto'
import { readFile, rm, writeFile } from 'node:fs/promises'

const MARKER = '<!--app-html-->'
const indexPath = new URL('../dist/index.html', import.meta.url)
const serverDir = new URL('../dist-server/', import.meta.url)

const { render } = await import(new URL('entry-server.js', serverDir))
const template = await readFile(indexPath, 'utf8')
if (!template.includes(MARKER)) throw new Error(`${MARKER} not found in dist/index.html`)

// Line endings are normalised so the inline script's hash (checked below) is the
// same whether the build runs on Windows or Linux.
// (A replacer function, so `$` sequences in the rendered HTML aren't treated as patterns.)
const html = template.replace(MARKER, () => render()).replace(/\r\n?/g, '\n')
await writeFile(indexPath, html)
await rm(serverDir, { recursive: true, force: true })
console.log('Prerendered dist/index.html')

// The Content-Security-Policy in vercel.json allows inline scripts by hash if deploying to Vercel.
try {
  const vercelConfig = await readFile(new URL('../vercel.json', import.meta.url), 'utf8')
  for (const [, body] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    const hash = `'sha256-${createHash('sha256').update(body).digest('base64')}'`
    if (!vercelConfig.includes(hash)) {
      console.warn(`[prerender] Inline script hash ${hash} is not in vercel.json script-src.`)
    }
  }
} catch (e) {
  // vercel.json is optional
}
