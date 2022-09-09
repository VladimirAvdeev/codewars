function highAndLow(numbers){
    let arrStr = numbers.split(' '); // delete spaces
    let result;
    arrStr.sort(function(a,b){  //descending sort with compare function
        return b - a;
    });
    result = (arrStr[0] + ' ' + arrStr[arrStr.length-1]); // first element + last element
    return result;
}
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));