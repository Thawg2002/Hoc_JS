//Object contructor: Xây dựng đối tượng

// =

/**
 * Object  prototype : Thêm thành phần tạo nên Object contructor
 */
// function User(firstname, lastname, avarta) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.avarta = avarta;

//   this.fullName = function () {
//     return `${this.firstname} ${this.lastname}`;
//   };
// }
// User.prototype.className = "F8";
// //=> Thêm className vào object

// const author = new User("Thắng", "Nguyễn", "avarta");
// const user = new User("Hải", "Nguyễn", "avarta");

// // author.tittle = "Xin chào";

// console.log(author.className);
// console.log(user);

/** DATE : dùng để lấy thời gian  */
// const date = new Date();
// console.log(date.getFullYear());

/** Math object */
console.log(Math.PI); //lấy số pi 3,14
console.log(Math.round(3.1)); //làm tròn số thập phân
console.log(Math.abs(-3)); //lấy giá trị tuyệt đối
console.log(Math.ceil(4.1)); //làm tròn trên
console.log(Math.floor(4.9)); //làm tròn dưới

console.log(Math.random() * 10); //random number
var random = Math.floor(Math.random() * 3);
//=> dùng math.foor để làm tròn dưới trong vd trên vì nếu làm tròn lên\ khi random sẽ bị thừa và xuất hiện lỗi undefined

const user = ["Thắng", "Đức", "Hải"];
console.log(user[random]);

console.log(Math.min(2, 3, 4, 63, 2)); //lấy số nhỏ nhất
console.log(Math.max(2, 3, 4, 63, 2)); //lấy số lớn nhất
