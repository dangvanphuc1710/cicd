const http = require('http');

const port = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>CI/CD Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          text-align: center;
          padding: 100px;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 0.5em;
        }
        p {
          font-size: 1.2em;
        }
        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 12px;
          display: inline-block;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <h1>🚀 CI/CD Demo</h1>
      <div class="card">
        <p>Hello CI/CD with <strong>Docker</strong> & <strong>GitHub Actions</strong>!</p>
        <p>Server running on port <b>${port}</b></p>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
