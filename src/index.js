module.exports = function getZerosCount(number) {
  let zero = 0;
  let num = number;
  for(;num>0;){
      num = Math.floor(num/5); 
      zero = zero + num;}
  return Math.floor(zero);
}
