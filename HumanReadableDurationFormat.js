function formatDuration (seconds) {
    const year = 31536000;
    const day = 86400;
    const hour = 3600;
    const min = 60;
    let result = '';
    recurse(seconds);
    function recurse (sec) {
        if(sec >= year){
            if(sec%year){
                result += 
                Math.round(sec / year) > 1 
                ? Math.round(sec / year) + ' years ' 
                : Math.round(sec / year) + ' year '; 
                recurse(sec%year);
            }else result += 
            Math.round(sec / year) > 1 
            ? Math.round(sec / year) + ' years ' 
            : Math.round(sec / year) + ' year ';   
        }else if(sec >= day){
            if(sec%day){
                result += (Math.round(sec / day)).toString() + ' days '; 
                recurse(sec%day);
            }else result += (Math.round(sec / day)).toString() + ' days ';
        }else if(sec >= hour){
            if(sec%hour){
                result += (Math.round(sec / hour)).toString() + ' hours '; 
                recurse(sec%hour);
            }else result += (Math.round(sec / hour)).toString() + ' hours ';
        }else if(sec >= min){
            if(sec%min){
                result += (Math.round(sec / min)).toString() + ' minutes '; 
                recurse(sec%min);
            }else result += (Math.round(sec / min)).toString() + ' minutes '; 
        }else result += (Math.round(sec / 1)).toString() + ' seconds';
    }
    console.log(result.split(' '));
    
}

console.log(formatDuration(31536002));

//1 min = 60 sec
//1 hour = 3 600 sec
//1 day = 86 400 sec
//1 year = 31 536 000 sec