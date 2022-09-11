function nthFibo(n) {
    if(n>1){
        return Math.round(Math.pow((1+Math.sqrt(5))/2, n-1)/Math.sqrt(5));
    }else return 0;  
}

  console.log(nthFibo(6));

  // формула Бине
  // n-1 потому что в формуле числа Фибоначчи стартуют с 0, а в задании с 1