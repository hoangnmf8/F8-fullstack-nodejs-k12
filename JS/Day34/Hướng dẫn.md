## Cài đặt thành công node

Tải và cài đặt tại: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

- Kiểm tra:

```bash
node -v
npm -v
```

npm: Node Package Manager

## Cài đặt json-server global

```bash
npm install -g json-server@0.17.4
```

- `0.17.4`: là phiên bản cụ thể của json-server

- Nếu muốn xoá json-server global

```bash
npm uninstall -g json-server
```

## Khởi tạo dự án nodejs

```bash
npm init -y
```

- `-y`: là flag để tạo file `package.json` mặc định với các thông tin mặc định

## Thêm `.gitignore` vào thư mục gốc của dự án

Thêm file `.gitignore` với nội dung:

```bash
# Ignore build output
build/
dist/

# Ignore package manager directories
node_modules/
vendor/
package-lock.json
```

- `.gitignore`: là file chứa danh sách các file, thư mục không muốn đưa lên git

## Khởi chạy json-server cho riêng dự án

- Vào package.json thêm script:

```json
"scripts": {
  "start": "json-server --watch db.json --port 3000"
}
```

- Muốn khởi chạy, chỉ cần chạy lệnh:

```bash
npm start
```

- `--watch db.json`: là flag để json-server theo dõi file `db.json`
- `--port 3000`: là flag để json-server chạy ở cổng 3000

Khi khởi chạy, file db.json sẽ được tạo ra tự động.

## Cài đặt json-server-auth

```bash
npm install json-server-auth
```

## Cập nhật package.json

```json
"scripts": {
	"start": "json-server --watch db.json --port 3000 -m ./node_modules/json-server-auth"
}
```
