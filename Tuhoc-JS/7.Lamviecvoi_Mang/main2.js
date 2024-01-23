var coures = [
  { id: 1, name: "javascript", coin: 250 },
  { id: 2, name: "HTML, CSS", coin: 240 },
  { id: 3, name: "php", coin: 0 },
  { id: 4, name: "javascript", coin: 25 },
];
//Làm việc với mảng phần 2

// 1.Foreach : duyệt qua mảng
// coures.forEach(function (coures, index) {
//   console.log(index, coures);
// });
// 2.every(): kiểm tra tất cả các phần tử phải đạt điều kiện
// const isFree = coures.every(function (coures, index) {
//   return coures.coin === 0;
// });
// console.log(isFree);
// 3.some(): 1 phẩn tử đạt là đạt đk
// const isFree = coures.some(function (coures, index) {
//   return coures.coin === 0;
// });
// console.log(isFree);
//=>>vÌ VẬY SOME VS EVERY KHÁC NHAU

// 4.find():Tìm kiếm trả về 1 phần tử
// const coure = coures.find(function (coures, index) {
//   return coures.name === "javascript";
// });
// console.log(coure);
// 5.filter(): tìm kiếm trả về nhiều phần tử
// const coure = coures.filter(function (coures, index) {
//   return coures.name === "javascript";
// });
// console.log(coure);

//=>>> FIND VÀ FILTER KHÁC NHAU

// 6.map():
// var newCoures = coures.map((coures, index) => ({
//   id: coures.id,
//   index: index,
//   name: `Khóa học ${coures.name}`,
//   coinText: `Học phí: ${coures.coin}`,
// }));
// console.log(newCoures);
// console.log(coures);

// 7.reduce():
//-Tính tổng số coin
// var total = coures.reduce(function (bienluutru, giatricongthem) {
//   return bienluutru + giatricongthem.coin;
// }, 0);
// console.log(total);
//0 đầu tiên là giá trị khởi tạo

//BÀI TẬP
//Flat - "Làm phẳng" mảng từ Dept array
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, deptItem) {
  return flatOutput.concat(deptItem);
}, []);
console.log(flatArray);

//Lấy ra các khóa học và đưa về một mảng mới
var topics = [
  {
    topic: "Font-end",
    coures: [
      {
        id: 1,
        title: "HTML-CSS",
      },
      {
        id: 2,
        title: "javarcript",
      },
    ],
  },
  {
    topic: "Back-end",
    coures: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "Nodejs",
      },
    ],
  },
];

var newCoures = topics.reduce(function (coure, topic) {
  return coure.concat(topic.coures);
}, []);
// console.log(newCoures);

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(arr) {
  let People = arr.filter(function (watch) {
    return watch.Director === "Christopher Nolan";
  });
  let totalIDM = People.reduce((coure, watch) => {
    return coure + Number(watch.imdbRating);
  }, 0);

  var diemTb = totalIDM / People.length;
  return diemTb;
}
// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

// VD: Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
function arrToObj(arr) {
  return arr.reduce(function (results, item) {
    var key = item[0];
    var value = item[1];
    results[key] = value;
    return results;
  }, {});
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//Include method :Tìm kiếm
var cars = ["Rolls-Royce", "Mercedes", "Lexus", "BMW", "Audi"];

console.log(cars.includes("Mercedes", 1));
//=> 1 là tìm từ phần tử thứ 1 .Mặc định là phần tử số 0
