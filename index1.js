// swaping value 
  
let array= [1,2,3,45,4,5];
// let len = array.length
// let tem = array[0];
// array[0]=array[len-1];
// array[len-1] = tem;

// array distructuring 
// [array[0], array[5]]= [array[5], array[0]];
// console.log({array});

// let a =5 ;
// let b = 10;
// [a,b] = [b,a]
// console.log({a, b})


// copy clicpboard
function copyToclipBoard(){
    const element =  document.createElement('textarea');
    element.value =  str;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild("element"); 
}
function handleClick(){
    let text  =  Document.querySelectore('text');
    copyToclipBoard(text.inerText);
}

// 3. destructuring aliases
// const language = {
//     name: "saheb",
//     age: 23,
//     address: "dhaka"
// }
 
// const {name : fullName, age: Age} = language;
// // console.log({name, age})
// console.log({fullName, Age})


// 4. get value as data type
// const element = document.querySelector('number').valueAsNumber ;


// 5. remove duplicate value from array
// const Array = [1,2,3,3,4,4,4,43,43];
// console.log([...new Set(Array)])

//6. compare two arrays by value
// const hasSameElements= (a,b)=>{
//     return a.length === b.length && a.every((v, i)=>v === b[i])
// }
// console.log(hasSameElements([2,2],[2,2]));

// 7. shuffling array
// const number = [1,2,3,4,5,6];
// console.log(number.sort(()=>Math.random() -0.5));


// 8. comma operator
//  A comma operator takes two expressions, evaluates them from left to right,
//  and returns the value of the right expression.
let x = 1;
x =(x++ , x)
console.log(x);
let y = (2,4)
console.log(y)

let a =[[1,33,22,44,],[40,50,60],[7,70,90]];
for (let i =0, j =3; i<= 3; i++, j--){
    console.log("a["+i+"]["+ j +"] = " + a[i][j]);
}