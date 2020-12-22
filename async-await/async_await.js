let sum = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a != "number" | typeof b != "number") {
      return reject("Giá trị truyền vào phải là số .");
    }
    resolve(a + b);
  }, 1000);
};

let total = async () => {
  try {
    let total01 = await sum(7, 10);
    let total02 = await sum(total01, 10);
    let total03 = await sum(total02, 10);
    console.log(total03);
  } catch (error) {
    console.log(error);
  }
}
total();

//------------------trường hợp chỉ gọi 1 lần--------------//
// let total = async () => {
//   try {
//     let total01 = await sum(7, 10);
//     console.log(total01);
//   } catch (error) {
//     console.log(error);
//   }
// }
// total();

// or

// (async () => {
//   try {
//     let total01 = await sum(7, 10);
//     console.log(total01);
//   } catch (error) {
//     console.log(error);
//   }
// })();
