let arr = [];
let itemt1 = {
    name : "a",
    model : "A01",
    cost : "200",
    quantity : 5
}
let itemt2 = {
    name : "b",
    model : "A03",
    cost : "245",
    quantity : 9
}
let itemt3 = {
    name : "c",
    model : "A05",
    cost : "230",
    quantity : 8
}
let itemt4 = {
    name : "f",
    model : "A51",
    cost : "2560",
    quantity : 99
}
arr.push(itemt1, itemt2,itemt3);
console.log(arr);
console.log(arr[2].quantity);
arr.push(itemt4);
console.log(arr);
