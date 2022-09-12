function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays != null){
        if(arrayOfArrays.length > 1){
            let arrOfLength = arrayOfArrays.map(value=>{
                return (value!=null) ? value.length : 0;
            }).sort((a,b)=>a-b);
            if(!arrOfLength.some(value=>value == 0)){
                for(let i = 0; i < arrOfLength.length; i++){
                    if(arrOfLength[i+1] - arrOfLength[i] != 1){
                        return arrOfLength[i]+1;
                    }
                }
            }else return 0;
        }else return 0;
    }else return 0;
}

console.log(null == null);
console.log(getLengthOfMissingArray(null));
  