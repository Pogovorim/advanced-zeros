module.exports = function getZerosCount(number, base) {
 
  var result = 0;
  var n;
  
  for(var i = 2; i <= base; i++) {
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
