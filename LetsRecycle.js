function recycle(array) {
    const recycle = ['paper', 'glass', 'organic', 'plastic'];
    let result = [[],[],[],[]];
    for (let i = 0; i < recycle.length; i++){
        for (obj of array){
            if (obj.material === recycle[i] || obj.secondMaterial === recycle[i]){
                result[i].push(obj.type);
            }
        }
    }
    return result;
}

console.log(recycle([
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
  ]));