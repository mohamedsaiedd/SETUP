import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEndpoints(): string {
    const endpoints = [
      { method: 'GET', path: '/', description: 'API endpoints listing (this page)' },
      { method: 'GET', path: '/api', description: 'Swagger UI documentation' },
      { method: 'GET', path: '/Users', description: 'Get all users' },
      { method: 'POST', path: '/Users', description: 'Create a new user' },
      { method: 'GET', path: '/Users/:id', description: 'Get a user by ID' },
      { method: 'PUT', path: '/Users/:id', description: 'Update a user' },
      { method: 'DELETE', path: '/Users/:id', description: 'Delete a user' },
      { method: 'GET', path: '/teachers', description: 'Get all teachers' },
    ];

    const methodColors: Record<string, string> = {
      GET: '#61affe',
      POST: '#49cc90',
      PUT: '#fca130',
      DELETE: '#f93e3e',
    };

    const endpointRows = endpoints
      .map((ep) => {
        // Only GET endpoints without params are directly clickable
        const isClickable = ep.method === 'GET' && !ep.path.includes(':');
        const pathContent = isClickable
          ? `<a href="${ep.path}" class="path-link">${ep.path}</a>`
          : `<span class="path-text">${ep.path}</span>`;

        return `
        <tr${isClickable ? ' class="clickable"' : ''}>
          <td>
            <span class="method" style="background-color: ${methodColors[ep.method] || '#999'}">
              ${ep.method}
            </span>
          </td>
          <td class="path">${pathContent}</td>
          <td class="description">${ep.description}</td>
        </tr>
      `;
      })
      .join('');

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Endpoints</title>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
            min-height: 100vh;
            color: #e0e0e0;
            padding: 40px 20px;
          }
          
          .container {
            max-width: 900px;
            margin: 0 auto;
          }
          
          header {
            text-align: center;
            margin-bottom: 50px;
          }
          
          h1 {
            font-size: 2.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 12px;
          }
          
          .subtitle {
            color: #8b8b9a;
            font-size: 1.1rem;
          }
          
          .swagger-link {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          }
          
          .swagger-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
          }
          
          .endpoints-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }
          
          .card-header {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .card-header h2 {
            font-size: 1.3rem;
            color: #f0f0f0;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          tr {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            transition: background 0.2s ease;
          }
          
          tr:hover {
            background: rgba(255, 255, 255, 0.03);
          }
          
          tr:last-child {
            border-bottom: none;
          }
          
          td {
            padding: 18px 30px;
            vertical-align: middle;
          }
          
          td:first-child {
            width: 100px;
          }
          
          .method {
            display: inline-block;
            padding: 6px 14px;
            border-radius: 6px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            font-weight: 600;
            color: white;
            text-transform: uppercase;
            min-width: 70px;
            text-align: center;
          }
          
          .path {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.95rem;
            width: 200px;
          }
          
          .path-link {
            color: #a5b4fc;
            text-decoration: none;
            padding: 4px 10px;
            border-radius: 4px;
            transition: all 0.2s ease;
            display: inline-block;
          }
          
          .path-link:hover {
            background: rgba(165, 180, 252, 0.15);
            color: #c4b5fd;
            text-decoration: underline;
          }
          
          .path-text {
            color: #6b7280;
          }
          
          tr.clickable {
            cursor: pointer;
          }
          
          tr.clickable:hover {
            background: rgba(99, 102, 241, 0.1);
          }
          
          .description {
            color: #9ca3af;
            font-size: 0.95rem;
          }
          
          footer {
            text-align: center;
            margin-top: 40px;
            color: #6b7280;
            font-size: 0.9rem;
          }
          
          footer span {
            color: #ec4899;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>🚀 API Endpoints</h1>
            <a href="/api" class="swagger-link">📚 Open Swagger Documentation</a>
          </header>
          
          <div class="endpoints-card">
            <div class="card-header">
              <h2>Available Routes</h2>
            </div>
            <table>
              ${endpointRows}
            </table>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
