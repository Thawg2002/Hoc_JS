//API -> Application programing interface
//=> nó là cổng giao tiếp giữa PHẦN MỀM

var postAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(postAPI)
  .then(function (responce) {
    return responce.json();
  })
  .then(function (posts) {
    var htmls = posts
      .map(function (post) {
        return `<h1>${post.title}</h1>
        <p>${post.body}</p>
        `;
      })
      .join("");
    document.querySelector("ul").innerHTML = htmls;
  })
  .catch(function (error) {
    console.log("Đã xảy ra lỗi", error);
  });

//JSON server
