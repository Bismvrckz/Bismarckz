var filterDuplicate = (arr, cb) => {
    var final = [];
    var index;
    for (index = 0; index < arr.length; index++) {
      var filter = cb(arr[index]);
      if (filter) {
        final.push(arr[index]);
      }
    }
    return final;
  };
  
  var numbers = [1, 2, 3, 4, 5];
  
  var greaterThanThree = (number) => {
    return number > 3;
  };
  
  // TEST
  var result1 = numbers.filter(greaterThanThree);
  var result2 = filterDuplicate(numbers, greaterThanThree);
  
  console.log(result1);
  console.log(result2);
  