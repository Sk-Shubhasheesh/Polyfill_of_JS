// About Reduce
// arr.reduce((acc, curr, i, arr)=>{}, intialValue)


// Polyfill for reduce
Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue ;
    for(let i=0; i<this.length; i++){
        // if inital value is not define
        if(accumulator != undefined){
            accumulator = callback(accumulator, this[i], i, this);
        }
        else{
            accumulator = this[i]
        }
    }
    return accumulator;
}
var arr = [1, 2, 3, 4];
const output = arr.myReduce((acc, curr, i, arr) => {
  return acc+curr;
}, 5);
console.log(output);
