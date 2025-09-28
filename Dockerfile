# Sử dụng Node.js chính thức
FROM node:18

# Tạo thư mục app
WORKDIR /usr/src/app

# Copy package.json trước để cache npm install
COPY package.json ./

RUN npm install

# Copy toàn bộ source
COPY . .

# Biến môi trường
ENV PORT=3002

EXPOSE 3002

# Lệnh khởi chạy
CMD ["npm", "start"]
