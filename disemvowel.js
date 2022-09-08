function disemvowel(str) {
    
    str = str.replace(/a*e*i*o*u*/ig,''); // i - case-insensitive
    return str;
  }

  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));