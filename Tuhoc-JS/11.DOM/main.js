//innerHTML && outnerHTML
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses) {
  var result = courses.map(function (course) {
    //   console.log(course);
    return `<li>${course}</li>`;
  }, 0);
  var ulNode = document.querySelector("ul");
  console.log([ulNode]);
  ulNode.innerHTML = result;
}

render(courses);

//Dom style
// var item = document.querySelector(".box");
// //Tìm style
// console.log(item.style);
// //Cách 1: gán style
// // item.style.backgroundColor = "#f9a642";
// // Cách 2:
// Object.assign(item.style, {
//   width: "200px",
//   height: "200px",
//   backgroundColor: "red",
// });

//Claslist property
//add
var item = document.querySelector(".box");
item.classList.add("red");
//contains : kiểm tra xem có class đó hay không và trả về true/false
console.log(item.classList.contains("red"));
//remove:để xóa class
// item.classList.remove("red");
//toggle: Nếu có class đó thì nó sẽ xóa và nếu không có thì nó sẽ thêm vào
setInterval(() => {
  item.classList.toggle("blue");
}, 1000);

//VD1
const nodeDiv = document.querySelectorAll("div");
// console.log(nodeDiv);
nodeDiv.forEach((item) => {
  item.classList.add("box");
});

//DOM EVENT :Sự kiện
//cho 1 thẻ h2
// var h2Element = document.querySelector("h2");
// h2Element.onclick = function () {
//   console.log(Math.random());
// };
//cho nhiều thẻ h2
var h2Elements = document.querySelectorAll("h2");

for (var i = 0; i < h2Elements.length; ++i) {
  h2Elements[i].onclick = function (e) {
    // e: event
    console.log(e);
    console.log(e.target); //target là element mà mình click
  };
}

//DOM events example
//1.Lấy input
var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function (e) {
  //onchange : phải thay đổi giá trị ban đầu rồi di chuột ra
  //oninput:lấy trực tiếp khi gõ
  console.log(e.target.value);
};
//2.lấy checkbox
var inputElement = document.querySelector('input[type="checkbox"]');
inputElement.onchange = function (e) {
  //onchange : phải thay đổi giá trị ban đầu rồi di chuột ra
  //oninput:lấy trực tiếp khi gõ
  console.log(e.target.checked);
};
//3.select
var inputElement = document.querySelector("select");
inputElement.onchange = function (e) {
  //onchange : phải thay đổi giá trị ban đầu rồi di chuột ra
  //oninput:lấy trực tiếp khi gõ
  console.log(e.target.value);
};
//keyup/keydown
var inputElement = document.querySelector('input[type="text"]');
inputElement.onkeyup = function (e) {
  //onchange : phải thay đổi giá trị ban đầu rồi di chuột ra
  //oninput:lấy trực tiếp khi gõ
  // console.log(e.target.value);
  // console.log(e.which); //bắt sự kiện của nút bàn phím
  switch (e.which) {
    case 27:
      console.log("exit");
      break;
  }
};
//với doccument
document.onkeydown = function (e) {
  switch (e.which) {
    case 27:
      console.log("exit");
      break;
  }
};

///PreventDefault : dùng dể ngăn chặn hành vi
//VD1
var aElements = document.querySelectorAll("a");
for (var i = 0; i < aElements.length; ++i) {
  aElements[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://chat.openai.com/")) {
      //startsWith là bắt đầu bằng chuỗi
      e.preventDefault(); //chặn hành vi mặc
    }
  };
}

//VD2
var ulElement = document.querySelector(".prevent-ul");
console.log(ulElement);

ulElement.onmousedown = function (e) {
  e.preventDefault();
};
ulElement.onclick = function (e) {
  console.log(e.target);
};
// StopPropagation:ngăn chặn nổi bọt , lan truyền từ tra sang con

document.querySelector(".div_propagation").onclick = function (e) {
  console.log("DIV");
};
document.querySelector(".button_propagation").onclick = function (e) {
  e.stopPropagation();
  console.log("Click me");
};

//Event listener
//1.Xử lý nhiều việc khi 1 event xảy ra | Lắng nghe => giông vs DOM Event
// stop
var buttonElement = document.querySelector(".button_Eventlistener");
// buttonElement.addEventListener("click", function (e) {
//   console.log("việc 1");
// });
function viec1() {
  console.log("vIECJ 1");
}
buttonElement.addEventListener("click", viec1);
setTimeout(function () {
  buttonElement.removeEventListener("click", viec1);
}, 3000);
