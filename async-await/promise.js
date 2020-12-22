let sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject("Giá trị truyền vào phải là số .");
      }
      resolve(a + b);
    }, 1000);
  });
};

sum(7, 10)
  .then(total => sum(total, 10))
  .then(total1 => sum(total1, 10))
  .then(total2 => {
    console.log(total2);
  })
  .catch(error => {
    console.log(error);
  });

  //------------------ttrường hợp chỉ gọi 1 lần--------------
  // sum(7, 10)
  // .then(total => {
  //   console.log(total);
  // })
