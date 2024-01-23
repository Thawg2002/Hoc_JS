var courseApi = "http://localhost:3000/couses";

function start() {
  getCourses(function (course) {
    renderCourses(course);
  });
  handleCreateForm();
}
start();

//Functions
//Lấy ra khóa học
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
//Render ra trình duyệt
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var html = courses.map(function (course) {
    return `<li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            </li>`;
  });
  listCoursesBlock.innerHTML += html.join("");
}
//Thêm
function handleCreateForm() {}
