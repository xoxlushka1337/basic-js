const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  let result;
  let newArr;

  if (Array.isArray(arr)) {
    if (arr.length == 0) {
      return arr;
    }
    newArr = arr;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === '--discard-next') {
        if (i === newArr.length - 1) {
          newArr.splice(i, 1);
          return newArr;
        }
        result = newArr.slice(0, i) + ',' + newArr.slice(i + 2);
        newArr = result;
      }

      if (newArr[i] === '--discard-prev') {
        if (i === 0) {
          newArr.splice(i, 1);
          console.log(newArr);
          return newArr;
        }
        result = newArr.slice(0, i - 1) + ',' + arr.slice(i + 1);
        newArr = result;
      }

      if (newArr[i] === '--double-next') {
        if (i == newArr.length - 1) {
          newArr.splice(i, 1);
          return newArr;
        }

        result = newArr.slice(0, i) + ',' + newArr[i + 1] + ',' + newArr.slice(i + 1);
        newArr = result;
      }

      if (newArr[i] === '--double-prev') {
        console.log(newArr);
        if (i === 0) {
          console.log(newArr);
          newArr.splice(i, 1);
          return newArr;
        }
        newArr = newArr.slice(0, i) + ',' + newArr[i - 1] + ',' + newArr.slice(i + 1);
      }
    }
    return arr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
