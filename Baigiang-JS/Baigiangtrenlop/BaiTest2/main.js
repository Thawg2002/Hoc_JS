function kiemtra() {
    var tensp = document.getElementById("tensp");
    var loai = document.getElementById("loai");
    var dongia = document.getElementById("don_gia");
    var soluong = document.getElementById("so_luong");
    var diachi = document.getElementsByName("dia_chi")
    var mausac = document.getElementsByName("mau_sac");


    if (tensp.value.length == 0) {
        alert("Moi nhap ten san pham");
    }
    if (loai.value == 0) {
        alert("Chưa chọn loại sp");
    }
    if (dongia.value == 0) {
        alert("Chưa nhap gia tien");
    }
    if (soluong.value == 0) {
        alert("Chưa nhap so luong");
    }
    if (!diachi[0].checked && !diachi[1].checked) {
        alert("Chưa chọn nơi nhận");
    }

    if (!mausac[0].checked && !mausac[1].checked && !mausac[2].checked) {
        alert("Chưa chọn màu sắc");
    }
}
function hienthi() {
    document.getElementById("phivc_noithanh").style.display = "block";

}
function luachon() {
    if (loai.value== '1') {
        document.getElementById("don_gia").value = '500000'

    }
    else if (loai.value== '2') {
        document.getElementById("don_gia").value = '200000'

    }
    else if (loai.value = '3') {
        document.getElementById("don_gia").value = '100000'

    }
}
