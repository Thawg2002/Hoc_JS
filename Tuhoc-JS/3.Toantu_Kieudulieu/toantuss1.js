/**
 * Toán tử chuỗi - String operato
 */
var firsName = "Xuan";
var lastName = "Thang";

console.log(firsName  +' '+lastName);

/**
 * Toán tử so sánh
 * 
 */
var a = 1; 
var b = 2;

if (a == b) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

/**
 * Boolean : true  or false
 */
var a = 1; 
var b = 2; 

var isSccess = a > b;
console.log(isSccess);

/**
 * IF - else  
 * ngoài 6 giá trị này  convert sang boolean đều là true
 * 0
 * false
 * '' ""
 * undefined
 * naN
 * null
 */

/**
 * Toán tử logic
 * 1.&& - And
 * 2.|| - Or
 * 3.! - Not
 */

var a = 1;
var b = 2;
var c = 3;
if(a > 0 && b > 0){

    console.log("Dieu kiend dung");
}