let sum = (a, b, callback) => {
  setTimeout(() => {
    let error, result;
    if ((typeof a != "number") | (typeof b != "number")) {
      error = "Giá trị truyền vào phải là số .";
      return callback(error, null);
    }
    result = a + b;
    return callback(null, result);
  }, 1000);
};

sum(7, 10, (error, total) => {
  if (error) {
    console.log(error);
    return;
  }
  sum(total, 10, (error, total01) => {
    if (error) {
      console.log(error);
      return;
    }
    sum(total01, 10, (error, total02) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(total02);
    });
  });
});

//------------------trường hợp chỉ gọi 1 lần--------------//

// sum(7, 10, (error, total) => {
//     console.log(total);
// });
