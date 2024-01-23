//Lệnh logic VD:
var age = prompt("Moi nhap tuoi: ");

if (age < 3) {
    console.log("Access is free under three");
}
else if (age < 12) {
    console.log("the fee is 5 dollars");
}
else if (age < 65) {
    console.log("A regular ticket cost 10 dollars.");

}
else if (age >= 65) {
    console.log("A ticket is 7 dollars.");
}
//lẹnh toán tử bậc ba có điều kiện
let access = age < 18 ? "denied" : "allowed";
console.log(access);
//Lệnh switch
var luachon = prompt("Nhap lua chon: ");
switch (luachon) {
    case "1":
        console.log("Lua chon thu 1");
        break;
    case "2":
        console.log("Lua chon thu 2");
        break;
    case "3":
        console.log("Lua chon thu 3");
        break;
    default:
        break;
}
//Lệnh lặp while 
do {
    number = prompt("Nhap so : ");
}
while (!(number >= 0 && number < 100));
//Lệnh lặp for 
let names = [1, 2, 3, 4, 5];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);

}
//lệnh for each
for (let name of names) {
    console.log(name);
}
//Hàm có tham số truyền vào
function tester(para1, para2) {
    console.log(para1 + " " + para2);
}
const arg1 = "argument 1 ";
const arg2 = "argument 2";
tester(arg1, arg2);

// Confirm: là hộp thoại nhận hồi đáp từ phía người dùng
function xacNhan(traloi) {
    var ketQua = "";
    if (traloi) {
        ketQua = "Tuyet voi. Chuc ban chien thang!";
    } else {
        ketQua = "Hen gap lai ban nhe!";
    }
    return ketQua;
}
var traloi = confirm("Ban se choi game chu?");
var thongbao = xacNhan(traloi);
alert(thongbao);