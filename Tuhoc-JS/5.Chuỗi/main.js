var fullName = 'Son Dang la \'Sieu nhan\'';
console.log(fullName);

//Template string 
var firstName = "Son";
var lastName = "Dang";
console.log(`Toi la ${firstName} ${lastName}`)

//1.Length

//2.Find index:Tìm vị trí 
console.log(fullName.indexOf('Dang'))
console.log(fullName.search('Dang'))

//3.Cut stirng: Cắt chuỗi
console.log(fullName.slice(4, 8))
console.log(fullName.slice(4))

//4.Replace: Ghi đè thay thế
console.log(fullName.replace('Dang', "Nguyen"))

//5,6 convert to upper case , lower case
console.log(fullName.toUpperCase());

//7.Trim : Loại bỏ khoảng trắng kí tự ở hai đầu
var case1 = "     Son Đang web     ";
console.log(case1.length)
console.log(case1.trim())

//8.Split :Dựa vào điểm chung để Tách thành array
var case2 = '1, 2, 3, 4, 5 ';
console.log(case2.split(', '))
var case3 = 'Javascript'
console.log(case3.split(''))

// 9. get a character by index: lấy kí tự bởi vị trí cho trước
console.log(case3.charAt(2))