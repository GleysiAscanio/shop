// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { renderToString } from 'react-dom/server'
import { PageLayout } from './PageLayout'

async function onRenderHtml(pageContext) {
  const { Page } = pageContext
  const pageHtml = dangerouslySkipEscape(
    renderToString(
      <PageLayout>
        <Page />
      </PageLayout>,
    ),
  )
  return escapeInject`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://kit.fontawesome.com/4f42d3a865.js" crossorigin="anonymous"></script>
      <title>Vite + React</title>
    </head>
    <body style="margin:0;padding:0">
      <div id="root">${pageHtml}</div>
    </body>
  </html>
  `
  }
