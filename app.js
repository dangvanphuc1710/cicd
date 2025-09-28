// server.js
const http = require('http');

const port = process.env.PORT || 3002;

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>CI/CD Demo — xịn hơn</title>
<style>
  *{box-sizing:border-box}body{margin:0;font-family:Inter,Segoe UI,Arial;background:linear-gradient(135deg,#0f172a,#0b1020);color:#e6eef8;display:flex;align-items:center;justify-content:center;height:100vh}
  .card{width:min(920px,90%);background:linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02));padding:36px;border-radius:16px;box-shadow:0 10px 30px rgba(2,6,23,0.6);display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:center}
  h1{font-size:2.2rem;margin-bottom:8px}
  p.lead{margin:0 0 12px 0;opacity:0.9}
  .left{padding:12px}
  .right{background:rgba(255,255,255,0.02);padding:18px;border-radius:12px;text-align:center}
  .badge{display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.06);font-weight:600;margin-bottom:8px}
  .port{font-size:1.1rem;font-weight:700}
  button{margin-top:12px;padding:10px 16px;border-radius:10px;border:0;cursor:pointer;background:#46c1ff;color:#062433;font-weight:700}
  .meta{font-size:0.95rem;margin-top:10px;opacity:0.85}
  @media(max-width:720px){.card{grid-template-columns:1fr;gap:12px}}
</style>
</head>
<body>
  <div class="card">
    <div class="left">
      <div class="badge">CI/CD • Docker • GitHub Actions</div>
      <h1>🚀 Demo pipeline</h1>
      <p class="lead">Giao diện demo cho app Node.js chạy trong Docker. Bạn deploy qua GitHub Actions và chạy container trên EC2.</p>
      <div class="meta">Server đang chạy: <span class="port">${port}</span></div>
      <div style="margin-top:14px">
        <button onclick="showInfo()">Check deployment</button>
      </div>
    </div>
    <div class="right">
      <div style="font-size:0.95rem">Status</div>
      <div id="status" style="margin-top:8px;font-size:1.1rem;font-weight:700">Ready</div>
      <div style="margin-top:10px;color:rgba(255,255,255,0.7)">Click để xem thời gian</div>
      <div style="margin-top:10px;color:rgba(255,255,255,0.6);font-size:0.9rem" id="clock"></div>
    </div>
  </div>

<script>
function showInfo(){
  const s = document.getElementById('status');
  s.textContent = 'Deployed ✓';
  alert('Deployment thành công! 🎉\\nPort: ${port}');
}
function updateClock(){
  document.getElementById('clock').textContent = new Date().toLocaleString();
}
updateClock();
setInterval(updateClock,1000);
</script>
</body>
</html>`;
 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
