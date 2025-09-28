const http = require('http');

const port = process.env.PORT || 3002;

const html = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <title>Quản lý Thông tin</title>
  <style>
    body { font-family: Arial, sans-serif; background: pink; padding: 20px; }
    h1 { text-align: center; }
    form { margin-bottom: 20px; }
    input { margin: 5px; padding: 5px; }
    table { width: 100%; border-collapse: collapse; background: white; }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    button { margin: 2px; padding: 5px 10px; cursor: pointer; }
    .edit { background: #4caf50; color: white; border: none; }
    .delete { background: #f44336; color: white; border: none; }
  </style>
</head>
<body>
  <h1>Quản lý thông tin cá nhân</h1>
  <form id="infoForm">
    <input type="text" id="name" placeholder="Tên" required />
    <input type="number" id="age" placeholder="Tuổi" required />
    <input type="text" id="phone" placeholder="Số điện thoại" required />
    <input type="text" id="address" placeholder="Địa chỉ" required />
    <button type="submit">Thêm</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Tên</th>
        <th>Tuổi</th>
        <th>Số điện thoại</th>
        <th>Địa chỉ</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody id="dataTable"></tbody>
  </table>

  <script>
    const form = document.getElementById('infoForm');
    const table = document.getElementById('dataTable');
    let data = [];

    function render() {
      table.innerHTML = '';
      data.forEach((item, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = \`
          <td>\${item.name}</td>
          <td>\${item.age}</td>
          <td>\${item.phone}</td>
          <td>\${item.address}</td>
          <td>
            <button class="edit" onclick="editItem(\${i})">Sửa</button>
            <button class="delete" onclick="deleteItem(\${i})">Xóa</button>
          </td>
        \`;
        table.appendChild(tr);
      });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      data.push({ name, age, phone, address });
      form.reset();
      render();
    });

    window.editItem = i => {
      const item = data[i];
      document.getElementById('name').value = item.name;
      document.getElementById('age').value = item.age;
      document.getElementById('phone').value = item.phone;
      document.getElementById('address').value = item.address;
      data.splice(i, 1);
    };

    window.deleteItem = i => {
      if (confirm("Bạn có chắc muốn xóa?")) {
        data.splice(i, 1);
        render();
      }
    };
  </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
