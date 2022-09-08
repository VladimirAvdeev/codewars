function explode(s) {
    let result = '';
    for (element in s){
        for(let i = 0; i < parseInt(s[element],10); i++){
            result += s[element];
        }
    }
    return result;
}

console.log(explode("102269"));