module.exports = function getZerosCount(number) {
  var zero = 0;
  for(;number>0;){
      number = Math.floor(number/5); 
      zero = zero + number;}
  return Math.floor(zero);
}
