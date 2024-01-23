function Bai1() {
    var a = prompt("nhap a: ");
    var b = prompt("nhap b: ");
    var pythagorean = (a * a + b * b);
    document.write("So do cạnh huyen", pythagorean);
}
function Bai2() {
    var a = prompt("Nhap dien tich(m2): ");
    var sao = a / 360;
    document.write("Chuyển sang sào: ", sao);
    var mau = sao / 10;
    document.write("Chuyển sang mau: ", mau);
    var ha = mau;
    document.write("Chuyển sang ha: ", ha);
}
function Bai3(BMI) {
    if (BMI < 18.5) {
        alert("Thieu can")
    }
    else if (BMI < 24.99) {
        alert("Binh thuoong");
    } else if (BMI <= 29.99) {
        alert("Thua can");
    }

    else {
        alert("Beo phi");
    }
}
function Bai4() {
    const theList = ["Lauren", "Kevin", true, 35, null, undefined, ["one", "two"]];
    //xóa phần tử đầu và cuối của mảng
    theList.pop();
    theList.shift();
    //thêm vào đầu mảng
    theList.splice(0, 0, "FIRST");
    theList.splice(3, 0, "hello world");
    theList.splice(2, 0, "middle");
    theList.push("LAST");
    console.log(theList);
}
function Bai5() {
    var x = 10 + Math.round(5 * Math.random());
    //round : làm tròn đên số nguyên gần nhất
    //5*math.random : trả về số nguyên từ 0 đến 5
    var a = prompt("Số nhập vào : ");
    if (a == x) {
        alert("Chuc mừng , bạn đã đoán đúng");
    }
    else if (a > x) {
        alert("Gía trị của bạn lớn hơn số bí mật");
    }
    else {
        alert("Gía trị của bạn nhỏ hơn số bí mật");
    }


}
var luachon = prompt("Nhap lua chon: ");
switch (luachon) {
    case "1": {
        Bai1();
        break;
    }

    case "2": {
        Bai2();
        break;
    }
    case "3": {
        Bai3();
        break;
    }
    case "4": {
        Bai4();
        break;
    }
    case "5": {
        Bai5();
        break;
    }
    default:
        alert("Moi nhap lai!!");
}
