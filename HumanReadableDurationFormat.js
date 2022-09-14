function formatDuration (seconds) {
    const year = 31536000;
    const day = 86400;
    const hour = 3600;
    const min = 60;
    let result = '';
    let resultArr;
    recurse(seconds);
    function recurse (sec) {
        if(sec >= year){
            if(sec%year){
                result += 
                Math.floor(sec / year) > 1 
                ? Math.floor(sec / year) + ' years ' 
                : Math.floor(sec / year) + ' year '; 
                recurse(sec%year);
            }else result += 
            Math.floor(sec / year) > 1 
            ? Math.floor(sec / year) + ' years ' 
            : Math.floor(sec / year) + ' year ';   
        }else if(sec >= day){
            if(sec%day){
                result += Math.floor(sec / day) > 1 
                ? Math.floor(sec / day) + ' days ' 
                : Math.floor(sec / day) + ' day ';   
                recurse(sec%day);
            }else result += Math.floor(sec / day) > 1 
            ? Math.floor(sec / day) + ' days ' 
            : Math.floor(sec / day) + ' day ';  
        }else if(sec >= hour){
            if(sec%hour){
                result += Math.floor(sec / hour) > 1 
                ? Math.floor(sec / hour) + ' hours ' 
                : Math.floor(sec / hour) + ' hour ';  
                recurse(sec%hour);
            }else result += Math.floor(sec / hour) > 1 
            ? Math.floor(sec / hour) + ' hours ' 
            : Math.floor(sec / hour) + ' hour ';  
        }else if(sec >= min){
            if(sec%min){
                result += Math.floor(sec / min) > 1 
                ? Math.floor(sec / min) + ' minutes ' 
                : Math.floor(sec / min) + ' minute ';   
                recurse(sec%min);
            }else result += Math.floor(sec / min) > 1 
            ? Math.floor(sec / min) + ' minutes ' 
            : Math.floor(sec / min) + ' minute ';
        }else result += Math.floor(sec / 1) > 1 
        ? Math.floor(sec / 1) + ' seconds' 
        : Math.floor(sec / 1) + ' second';
    }
    resultArr = result.trim().split(' ');
    if(resultArr.length > 2) {
        resultArr.splice((resultArr.length-2),0,'and');
        for (let i = 0; i < resultArr.indexOf('and'); i++){
            if(i%2 && resultArr[i+1] != 'and'){
                resultArr[i]+=',';
            }
            
        }
        return resultArr.join(' ');
    }else if (resultArr[0] ==='0'){
        return 'now';
    }else return resultArr.join(' ');
    
}
console.log(formatDuration(0));

//1 min = 60 sec
//1 hour = 3 600 sec
//1 day = 86 400 sec
//1 year = 31 536 000 sec