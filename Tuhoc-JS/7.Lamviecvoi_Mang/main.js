var languages = ["Javacript", "PHP", "Ruby"];
console.log(languages);

//Kiểm tra xem có phải là Array ko
console.log(Array.isArray(languages));

//Truy xuất mảng
//-Độ dài mảng
console.log(languages.length);
//Lấy phần tử theo index
console.log(languages[1]);

/* Làm việc với mảng*/
//1.toString: chuyển sang kiểu chuỗi
console.log(languages.toString());

//2.join biến mảng thành chuỗi
console.log(languages.join(" - "));

//3.Pop : xóa element cuối mảng và trả về phần tử đã xóa
console.log(languages.pop());
console.log(languages);

//4.Push: thêm 1 hoặc nhiều phần tử ở Cuối mảng và trả về phần tử đã thêm
console.log(languages.push("Dash"));
console.log(languages);

//5.Shift : xóa phần tử Đầu mảng và trả về
console.log(languages.shift());
console.log(languages);

//6.Unshift: Thêm 1 hoặc nhiều phần tử vào Đầu mảng và trả về
console.log(languages.unshift("Java", " REJ"));
console.log(languages);

//7.splice
//splice(): xóa y phần tử sau vị trí x , sau đó thêm phần tử vào mảng
languages.splice(2, 1, "Chao", "tambiet"); //bắt đầu tại vị trí thứ 2 , sau đó xóa 1 phần tử đằng sau, r thêm các phần tử
console.log(languages);

//8.concat: Nối Array
var languages2 = ["RR"];
console.log(languages.concat(languages2));

//9.Slice : Cắt 1 hoặc vài elenment của arr
console.log(languages.slice(2, 3));
