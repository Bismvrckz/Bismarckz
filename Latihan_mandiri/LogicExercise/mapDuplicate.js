var mapDuplicate = (arr, cb) => {
    var final = [];
    var index;
    var panjang = arr.length;
    for (index = 0; index < panjang; index++) {
      final.push(cb(arr[index]));
    }
    return final;
  };
  
  var numbers = [1, 2, 3, 4, 5];
  
  var transform = (number) => {
    return number * 2;
  };
  
  // TEST
  var result1 = numbers.map(transform);
  var result2 = mapDuplicate(numbers, transform);
  
  console.log(result1);
  console.log(result2);
  