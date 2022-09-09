function isIsogram(str){
    let srtLower = str.toLowerCase();
    for (element in srtLower){
        if (srtLower.indexOf(srtLower[element]) != srtLower.lastIndexOf(srtLower[element])){ 
            return false;
        } 
    }   
    return true;
}

console.log(isIsogram("Dermatoglyphics"))