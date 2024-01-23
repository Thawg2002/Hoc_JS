/**1.Json : là một định dạng dữ liệu(chuỗi)
 * 2.Viết tắt  : JavaScript Object Notation
 *3.JSON thể hiện những dạng dữ liệu: Number,Boolean, Null,Array, Object
4.Stringify :từ Javacript sang types -> JSON
5: Pasre: từ JSON -> Javacripts
  
 */
// var json = '["js","PHP"]';//Kiểu array
var json = '{"name":"Thang","age":20}'; // Kiểu object

var object = JSON.parse(json);
console.log(object);

//NOTE: Promise
/**
 * Sync:Đồng bộ
 *
 * Async:Bất đồng bộ VD như: setTimeout,setInterval,fetch,XMLHttpRequest,file reading
 * =>ĐỂ XỬ LÝ BẤT ĐỒNG BỘ THÌ SỬ DỤNG CALLBACK
 *
 */

//VD
// setTimeout(function () {
//   console.log(1);
// }, 2000);
// console.log(2);

//Promise : Có 3 trạng thái
//1.Pendding:kiểu bị rò rỉ bộ nhớ khi không resolve hoặc reject
//2.Fulfilled:Trạng thái thành công
//3.Reject:Trạng thái thất bại
var promise = new Promise(
  //Executor function
  function (resolve, reject) {
    resolve();
  }
);
promise
  .then(function () {
    console.log("Thành công");
  })
  .catch(function () {
    console.log("Thất bại");
  })
  .finally(function () {
    console.log("Dừng");
  });

//   var promise = promise.resolve('Thành công');//luôn thành công và reject cũng tương tự

//VD:promise.all : cùng trả về kết quả.Nêu có 1 promise lỗi thì sẽ trả về catch
var promise1 = new Promise(function (resolve) {
  setTimeout(() => resolve([1, 2]), 2000);
});
// var promise2 = new Promise(function (resolve) {
//   setTimeout(() => resolve([3, 4]), 5000);
// });
var promise2 = Promise.reject("Có lõi rồi");
Promise.all([promise1, promise2])
  .then((value) => {
    var value1 = value[0];
    var value2 = value[1];
    console.log(value1.concat(value2));
  })
  .catch((error) => console.log(error));

//Promise example Ví dụ
var users = [
  {
    id: 1,
    name: "Kiên dam",
  },
  {
    id: 2,
    name: "SƠN ĐẶNG ",
  },
  {
    id: 3,
    name: "HÙNG dam",
  },
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Bao h ra video vậy anh",
  },
  {
    id: 2,
    user_id: 2,
    content: "Vừa ra xong em ơi!",
  },
  {
    id: 3,
    user_id: 1,
    content: "Ok anh ơiii",
  },
];
//1.Lấy comments
//từ comments lấy ra user_id
//từ user_id lấy ra user tương ứng

function getComments() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}
function getUserById(userIds) {
  return new Promise((resolve) => {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id);
      });
      //   console.log(result);
      resolve(result);
    }, 1000);
  });
}
getComments()
  .then(function (comments) {
    var userIds = comments.map((comment) => {
      return comment.user_id;
    }); //lấy id của những người comment
    return getUserById(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    }); //lấy những người comment có id lấy ở userIDs
  })
  .then(function (data) {
    //lấy những giá trị ở then đầu truyền vào đây rồi in ra
    // console.log(data);
    var html = "";
    var commentBlock = document.querySelector("ul");
    data.comments.forEach((comment) => {
      var user = data.users.find(function (user) {
        return user.id == comment.user_id;
      });
      html += `<li>${user.name}:${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });
