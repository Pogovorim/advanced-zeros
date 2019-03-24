module.exports = function getZerosCount(number, base) {
 
  let result = 0;
  let n;
 
  for(let i = 2; i <= base; i++) {
    n = 1;
     if (base % i === 0 && base > i) {
          while (base % i === 0 && base > i) {
            n++; 
            base = base / i;
          } 
     }
  }
    
     while (number > 0) {
       number = Math.floor(number / base);
       result = Math.floor(result + number);
    }
    return Math.floor(result/n);
}

