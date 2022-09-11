function deepCount(a){
    let counter = 0;
    recurse(a);
    function recurse(a){
        for(let i=0; i<a.length;i++){
            if(!Array.isArray(a[i])){
                counter++;
            }else{
                recurse(a[i]);
                counter++;
            }
        }
    }
    return counter;
}
console.log(deepCount([1, 2, [3, 4, [5]]]));