// // Memoization for single velue
// function add (x){
//     return 10 + x;
// }
// //higher order function
//  const memo =(func)=>{
//     let cache = {};
//     return function (x){
//         if(cache[x]){
//             console.log("result from cache")
//             return cache;
//         } else {
//             console.log("calculet result")
//            const result = func(x);
//            cache[x]= result;
//             return result;
//         }
//     }
//  }

//  const calculetData = memo(add)
// console.log(calculetData(20))
// console.log(calculetData(20))
// console.log(calculetData(20))

// Memoization for multipole velue
function add(...x) {
  console.log(x);
  return x.reduce((sum, curValu) => sum + curValu);
}
//higher order function
const memo = (func) => {
  let cache = {};
  console.log("my cache", cache);
  return function (...x) {
    const key = JSON.stringify(x);
    if (cache[key]) {
      console.log("result from cache");
      return cache;
    } else {
      console.log("calculet result");
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
};

const calculetData = memo(add);
console.log(calculetData(20, 10, 20, 34, 45));
console.log(calculetData(20, 10, 20, 30));
console.log(calculetData(20, 10, 30));
console.log(calculetData(20, 10, 30));
