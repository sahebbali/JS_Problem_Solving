// Show output like 1 wait 1 sec 2 wait 2 3 wait 3  .....

// function delay(i){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(i);
//         }, i * 1000);
//     })
// }

// async function timerer (n){
//     console.log("Time Start")
//     for(let i = 0; i<=n; i++){
//         const result = await delay(i);
//       console.log(result);
//     }
//     console.log("Time end")
// }

// timerer(5);


function reverseString(str) {
    var reversedStr = '';
    
    // Iterate through each character in the string from the last index to the first
    let start = performance.now();
    console.log({start})
    let len = str.length - 1;
    for (var i =len;  i >= 0; i--) {
      reversedStr += str[i];
    }
    
let end = performance.now();
    console.log({end})
    return reversedStr;
  }
  
  // Example usage
  var input = "Hello, world!";
  var reversed = reverseString(input);
  console.log(reversed); // Outputs: "!dlrow ,olleH"