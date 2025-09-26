/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj ={};
    for(let char of arr){
        if(!obj[char]){
            obj[char]=1
        }else{
            obj[char]++
        }
    }
   let a  = Object.values(obj).sort((a,b)=>a-b)
   for(let i = 0 ; i< a.length ; i++){
        if(a[i]==a[i+1]||a[i]==a[i-1]){
            return false
        }

   }
   return true
};