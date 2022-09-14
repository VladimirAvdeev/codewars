
function calculate() {
    let result = 0;
    let arg = arguments;
    for (let i=0; i<arg.length;i++){
        result += arg[i];
    }
    return function calculate(){
        let arg = arguments;
        for (let i=0; i<arg.length;i++){
            result += arg[i];
        }
        return result;
    }
}

console.log(calculate(1,1)(1,-1));