# Dự án Tính Chu Vi và Diện Tích Hình Chữ Nhật

Đây là một dự án nhỏ để tính chu vi và diện tích của hình chữ nhật. Người dùng chỉ cần nhập chiều dài và chiều rộng, sau đó nhấn nút **OK!** để nhận kết quả.

## Mô tả

Ứng dụng này có một form nhập liệu để người dùng nhập vào chiều dài và chiều rộng của hình chữ nhật. Khi người dùng nhấn nút **OK!**, ứng dụng sẽ tính toán chu vi và diện tích của hình chữ nhật và hiển thị kết quả.

## Các file trong dự án

- `index.html`: Giao diện người dùng, bao gồm form nhập liệu và nút để tính toán.
- `styles.css`: Các quy tắc CSS để tạo kiểu cho giao diện người dùng.
- `calculate.js`: Chứa logic tính toán chu vi và diện tích.
- `index.js`: Xử lý sự kiện từ giao diện người dùng và gọi hàm tính toán từ `calculate.js`.

## Cách sử dụng

1. **Clone hoặc tải về dự án**:
   ```bash
   git clone <url-dự-án>

2. Mở file index.html trong trình duyệt.

3. Nhập chiều dài và chiều rộng vào các trường nhập liệu.

4. Nhấn nút "OK!" để nhận kết quả tính chu vi và diện tích.

## Cấu trúc thư mục

```
.
├── index.html        # Giao diện người dùng
├── styles.css        # Định dạng giao diện
├── calculate.js      # Logic tính chu vi và diện tích
└── index.js          # Xử lý sự kiện và kết nối các file JS
```

## Các chức năng chính

Tính Chu Vi: 2 * (chiều dài + chiều rộng)

Tính Diện Tích: chiều dài * chiều rộng

Xử lý lỗi: Nếu người dùng nhập dữ liệu không hợp lệ (giá trị không phải số hoặc là số âm), ứng dụng sẽ hiển thị thông báo lỗi yêu cầu nhập lại giá trị hợp lệ.


## Các công nghệ sử dụng

HTML

CSS

JavaScript (ES6+)


## Cách cài đặt và chạy
Dự án này không yêu cầu cài đặt phức tạp. Bạn chỉ cần mở file index.html trong trình duyệt để sử dụng.

# Giới thiệu
Đây là một ví dụ đơn giản về cách xây dựng một ứng dụng web tính toán với HTML, CSS, và JavaScript. Nó giúp hiểu cách tách mã thành các phần hợp lý, dễ bảo trì trong một dự án nhỏ.
