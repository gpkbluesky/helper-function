# MỘT SỐ HÀM HỖ TRỢ

## Hàm xóa dấu chuỗi

- Dùng để xóa dấu chuỗi, thích hợp để kết hợp trong tìm kiếm ở client. Truyền vào chuỗi(string).

```javascript
  noAcii('Chuỗi bình thường')
  // Chuoi binh thuong
```

- Tương tự hàm trên nhưng sử dụng `String.prototype` để chaining hàm `replace()`. Truyền vào chuỗi(string).

```javascript
  noAcii2('Chuỗi bình thường')
  // Chuoi binh thuong
```

## Hàm tạo mảng index

- Dùng để tạo một mảng index. Truyền vào số(number).

```javascript
  indexArray(3)
  // [0, 1, 2]
```

## Lưu ý

- Tất cả hàm chưa check kiểu dữ liệu truyền vào.
- Immutable variable

## Test

- Cài đặt `node_modules`
```
  yarn
```

- Test bằng `jest`.
```
  yarn test
```