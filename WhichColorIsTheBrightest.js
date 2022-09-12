function brightest(colors){
    let RGB = colors.map((value)=>{
        let rgbDec = [];
        rgbDec.push(parseInt(value[1]+value[2],16));
        rgbDec.push(parseInt(value[3]+value[4],16));
        rgbDec.push(parseInt(value[5]+value[6],16));
        return Math.max(...rgbDec);
        
    })
    return colors[RGB.indexOf(Math.max(...RGB))];
}

console.log(brightest(["#00FF00", "#FFFF00", "#01130F"]));