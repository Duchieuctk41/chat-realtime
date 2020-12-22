// Viết hàm tính tổng, xử lý bất đồng bộ để xuất ra kết quả

let sum = (a, b) => {
  setTimeout(() => {
    return a + b;
  });
};

let total = sum(7, 10);
console.log(total);
