function getLengthOfMissingArray(arrayOfArrays) {
    let sortedArr = arrayOfArrays.sort();
    console.log(sortedArr);
    for(let i=0; i<sortedArr.length;i++){
        if ((sortedArr[i+1].length - sortedArr[i].length) > 2){
            console.log(sortedArr[i].length + 1);
            return sortedArr[i].length + 1;
        }
    }
}

getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] );
  