const { createCanvas, loadImage } = require('canvas');
const express = require('express');
const app = express();

app.get('/api/button', async (req, res) => {
  const { text = 'DevTools', repo = 'DevCat-HGS/DevTools' } = req.query;
  
  // Configurar el SVG del botón
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50">
      <defs>
        <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6e8efb" />
          <stop offset="100%" style="stop-color:#4a6cf7" />
        </linearGradient>
      </defs>
      <rect width="200" height="50" rx="25" fill="url(#buttonGradient)" />
      <text x="60" y="32" font-family="-apple-system, system-ui" font-size="16" font-weight="600" fill="white">${text}</text>
      <path transform="translate(30, 15)" fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  `;

  // Configurar los headers para SVG
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=600');
  
  // Enviar el SVG
  res.send(svg);
});

module.exports = app;