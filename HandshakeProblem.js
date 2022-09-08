function getParticipants(handshakes){
    let maxHndShk = handshakes * 2;
    let maxPpl = [];
    let pairs = [];
    for (let i = 1; i <= maxHndShk; i++){
        maxPpl.push(i);
    }
    //console.log(maxPpl);
    for (let i = 0; i <= handshakes; i++){
        if(maxPpl.indexOf(maxPpl[i]) != 0){
            let j = i;
            while(j>=1 && handshakes != pairs.length){
                let arr = [];
                arr.push(maxPpl[i-j]);
                arr.push(maxPpl[i]);
                pairs.push(arr);
                j--;
            }
        }
    }
    //console.log(pairs);
    //console.log(pairs.length);
    //console.log(pairs.flat().pop());
    if (pairs.flat().pop()) {
        return pairs.flat().pop();
    }else return 0;
  }

  console.log(getParticipants(100000));
  