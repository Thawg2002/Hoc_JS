function Bai1() {
    var a = prompt("Toan hạng a: ");
    var b = prompt("Toán hạng b: ");
    var o = prompt("Toán tử: ");
    switch (o) {
        case "+":
            var kq = Number(a) +Number(b);
            alert("Tổng:" +kq);
            break;
        case "/":
            var kq = a / b;
            alert("Thương: " + kq);
            break;
        case "-":
            var kq = a - b;
            alert("Hiệu: " + kq);
            break;
        case "*":
            var kq = a * b;
            alert("Tích: " + kq);
            break;

        default:
            alert("Không phải toán tử");
            break;
    }
}
function Bai2() {
    for(var i = 1; i<10;i++){
        for(var j = 0; j <= 10;j++ ){
            console.log(i,"x",j,"=",i*j );
        }
        console.log("===========");
    }
}
var luachon = prompt("Moi nhap lua chon: ")
switch (luachon) {

    case "1":
        {
            Bai1();
            break;
        }
    case "2":
        {
            Bai2();
            break;
        }


    default:
        break;
}