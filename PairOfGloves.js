function numberOfPairs(gloves){
    let glove;
    let result = 0;
    let golvesCopy = [...gloves];
    console.log(golvesCopy);
    while(golvesCopy.length){
        glove = golvesCopy.shift();
        if(golvesCopy.indexOf(glove) != -1){
            golvesCopy.splice(golvesCopy.indexOf(glove),1);
            result++;
        }
    }
    console.log(gloves);
    return result;
}

console.log(numberOfPairs(['gray','black','purple','purple','gray','black']));