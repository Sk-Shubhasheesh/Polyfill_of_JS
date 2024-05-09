// About filter
var arr = [1, 2, 3, 4];
const output = arr.filter((item, index, self) => {
  return item > 2;
});
// console.log(output);

// Polyfill of filter
Array.prototype.myFilter = function (callback) {
  let temp = [];
  for(let i=0; i<this.length; i++){
    if(callback(this[i], i, this)) temp.push(this[i])
  }
};
const output1 = arr.myFilter(() => {
 
});
console.log(output1);
