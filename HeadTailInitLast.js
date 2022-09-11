function head (arr){
    return arr[0];
}

function init (arr){
    let newarr = [...arr];
    newarr.pop();
    return newarr;
}

function tail (arr){
    let newarr = [...arr];
    newarr.shift();
    return newarr;
}

function last (arr){
    return arr[arr.length-1];
}

console.log(head([1,2,3,4,5]));
console.log(last([1,2,3,4,5]));
console.log(init([1,2,3,4,5]));
console.log(tail([1,2,3,4,5]));


