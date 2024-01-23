//Trong trường hợp so sánh có toán tử so sánh >,<,... thì dùng if else
//TRong trường hợp dc cho trước giá trị thì dùng switch case

/**
 * Vòng lặp
 */

//For loop

//tạo ra số ngẫu nhiên
//VD1
// function getRandNumbers(min, max, length) {
//   var array = new Array();
//   for (var i = 0; i < length; i++) {
//     var number = Math.floor(Math.random() * (max - min) + min);
//     array[i] = number;
//   }
//   return array;
// }

// console.log(getRandNumbers(2, 9, 5));

//VD2
// var myArray = ["js", "java", "PHP", "Dart"];
// var arrayLength = myArray.length;
// for (var i = 0; i < arrayLength; i++) {
//   console.log(myArray[i]);
// }

//For-in :dùng lấy key hoặc value
var myInfor = {
  name: "Thang",
  age: 20,
  address: "Hà Nội",
};
for (const key in myInfor) {
  console.log(key);
  console.log(myInfor[key]);
}

//For-of:
// var arraymyInfor = Object.array(myInfor); //  vì for of k chạy dc object nên biến nó thành array
// for (const key of myInfor) {
//   console.log(key);
// }

//Vòng lặp lồng nhau
myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    console.log(myArr[i][j]);
  }
}

//ĐỆ QUY
var arr = ["a", "b", "c", "a", "b", "c"];
console.log([...new Set(arr)]); //dùng ... trong ES6

//Sử dụng đệ quy 
//1.Xác nhận điểm dừng
//2.Tạo ra điểm dừng
function deQuy() {
  deQuy();
}
deQuy();
