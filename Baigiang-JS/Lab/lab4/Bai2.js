var sv = new Object();
sv.nhap = function () {
    this.hoTen = prompt("Ho va ten: ");
    this.diem = prompt("Nhap diem: ");
}
sv.hienthi = function () {
    if (this.diem >= 5) {
        this.hocluc = "Dậud";
    } else {
        this.hocluc = "Rot";
    }
    document.write("Ho va ten: " + this.hoTen);
    document.write("Diem : " + this.diem);
    document.write("Hoc luc: " + this.hocluc);
}

