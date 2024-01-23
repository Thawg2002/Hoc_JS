// Array.prototype.myMap = function (callback) {
//   var arr = [];
//   for (var i = 0; i < this.length; i++) {
//     var result = callback(this[i], i);
//     arr.push(result);
//   }
//   return arr;
// };

// // Expected results
// const numbers = [1, 2, 3];

// console.log(
//   numbers.myMap(function (number) {
//     return number * 2;
//   })
// ); // Output: [2, 4, 6]

// console.log(
//   numbers.myMap(function (number, index) {
//     return number * index;
//   })
// ); // Output: [0, 2, 6]

//Vd2: Fillter() : lọc theo điều kiệ<n></n>
Array.prototype.myFilter = function (callback) {
  var newArr = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], parseInt(index), this);
      if (result) {
        newArr.push(this[index]);
      }
    }
  }
  return newArr;
};
const numbers = [1, 2, 3, 4];

console.log(
  numbers.myFilter(function (number) {
    return number % 2 === 0;
  })
);
// Output: [2, 4];

/**
Expected results:


console.log(numbers.myFilter(function (number, index) {
  return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
  return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
*/

//VD3: Some() Trả về True False theo điều kiện .Tối thiểu 1 Element đúng là trả về false r dừng vòng lặp
Array.prototype.mySome = function (cb) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var results = cb(this[index], index, this);
      if (results) {
        return true;
      }
    }
  }
  return false;
};

const numbers2 = [1, 2, 3, 5];

console.log(
  numbers2.mySome(function (number) {
    return number % 2 === 0;
  })
);
Output: false;
/**
Expected results:


console.log(numbers.mySome(function (number, index) {
  return index % 2 === 0;
})); Output: true

console.log(numbers.mySome(function (number, index, array) {
  return array.length % 2 === 0;
})); Output: true
*/

//Every(): cũng trả về true false nhưng tất cả element đều phải đúng điều kiện
Array.prototype.myEvery = function (cb) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

// Expected results

const numbers3 = [1, 2, 3, 5];

console.log(
  numbers3.myEvery(function (number) {
    return number % 2 !== 0;
  })
); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true
