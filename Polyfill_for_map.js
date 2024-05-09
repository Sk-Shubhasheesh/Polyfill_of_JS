// Polyfills are basically our own implementation of inbuild function

// About MAP
var arr = [1, 2, 3, 4];
const arr1 = arr.map((item, index, self) => {
    return item*2 // cb function
})
// console.log(arr1)



// Creating Polyfill of map
Array.prototype.myMap = function(callback){
    if(!callback){
        throw Error("undefined is not a function")
    }
    let temp = []
    for(let i=0; i<this.length; i++){
        temp.push(callback(this[i], i, this));
    }
    return temp
}

const nums= [1, 2, 3, 4];
const multiplyThree = nums.myMap((num, i, arr)=>{
    return num*3;
});
console.log(multiplyThree);