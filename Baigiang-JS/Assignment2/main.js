//Header_main
var hinhanh = [];
var j = 0;
function loadanh() {
    for (let i = 0; i < 6; i++) {
        hinhanh[i] = new Image();
        hinhanh[i].src = "img/img" + i + ".jpg";

    }
}
function imgnext() {
    j++;
    if (j > 6) {
        j = 0;
    }
    document.getElementById("slideshow").src = hinhanh[j].src;

}
function imgback() {

    if (j > 0) {
        j--;
        if (j < 0) {
            j = hinhanh.length - 1;
        }
        document.getElementById("slideshow").src = hinhanh[j].src;
    }
}
setInterval(function () {
    j++;
    if (j > 4) {
        j = 0;
    }
    document.getElementById("slideshow").src = hinhanh[j].src;
}, 1000)

function themsp(){
    alert("Bạn đã thêm vào giỏ hàng");
}

function bigimg(x) {
    x.style.width = "105%"
    x.style.height = "350px"

}
function nomalimg(x) {
    x.style.width = "250px"
    x.style.height = "240px"
}
function chuyen(){
    
}

