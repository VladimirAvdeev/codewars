function sortByBit(arr) {
    /*let mapped = arr.map((el,i)=>{
        let bit = el.toString(2);
        let bitCount = Array.from(bit).reduce((a,b,i,arr)=>{
            return (arr.length>1) ? parseInt(a,10) + parseInt(b,10) : parseInt(b,10);
        },0)
        return {index: i, value: bitCount}
    });*/
    console.log(arr);
    return arr.sort((a,b)=>{
        if ((Array.from(a.toString(2)).reduce((a,b,i,arr)=>{
            return (arr.length>1) ? parseInt(a,10) + parseInt(b,10) : parseInt(b,10);
        },0)) > (Array.from(b.toString(2)).reduce((a,b,i,arr)=>{
            return (arr.length>1) ? parseInt(a,10) + parseInt(b,10) : parseInt(b,10);
        },0))){
            return 1;
        }
        if ((Array.from(a.toString(2)).reduce((a,b,i,arr)=>{
            return (arr.length>1) ? parseInt(a,10) + parseInt(b,10) : parseInt(b,10);
        },0)) < (Array.from(b.toString(2)).reduce((a,b,i,arr)=>{
            return (arr.length>1) ? parseInt(a,10) + parseInt(b,10) : parseInt(b,10);
        },0))){
            return -1;
        }
        return a-b;
    })
}

console.log(sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]));