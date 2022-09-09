function duplicateEncode(word){
    let wordLow = word.toLowerCase();
    let result = '';
    for (element in wordLow){
        if (wordLow.indexOf(wordLow[element]) == wordLow.lastIndexOf(wordLow[element])){
            result += '('
        }else result += ')'
    }
    return result;
}

console.log(duplicateEncode("recede"));