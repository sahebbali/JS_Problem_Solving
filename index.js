// Remove falsy values form any Array

let Array = ["Apple",false, 0, null, NaN, undefined, 34,"Baba",'',true];
let Truesy = Array.filter(Boolean) ;
console.log(Truesy);


// convert any value to boolean like "Bangladesh"

 console.log(!!"Bangladesh") // true
 console.log(!!"")  //false
 console.log(!!0)  //false
 console.log(!!undefined) //false


// Resizeing of Array 

const animals = ['Tiger', "Lioun", "Deir","Manki","Elefen"]
animals.length=3;
console.log(animals);   //[ 'Tiger', 'Lioun', 'Deir' ]

// how to Geattera a multi-diemersional array
let smilleys = ['apple', 'banana',['tiger','lion'],12,13 ];
console.log(smilleys.flat());  //[ 'apple', 'banana', 'tiger', 'lion', 12, 13 ] flat () work for first child
let smilleys2 = ['apple', 'banana',['tiger','lion',[1,2,3,4,[6,7,8,]]],12,13 ];
console.log(smilleys2.flat(Infinity)); //['apple', 'banana', 'tiger','lion',  1, 2, 3, 4,6,7,8,12,  13]


 // short conditionals
 const captain = 'tamin';
 if(captain == 'mashrafi'){
    console.log("I love You");
 } else{
    console.log("Love")
 }
 captain == 'mashrafi' && console.log("I love You")
 captain == 'mashrafi' || console.log("Love")


// Replace all accurances of string 
const quote = " React is a js framwork and this framwork is the monst popular front-end framework right now";
console.log(quote.replace(/framwork/g,'library'));

// log values with varibanle name smartly
const lib = " JQuery";
const lib1 = "React";
console.log(`lib ${lib}`)   // lib  JQuery
console.log(`lib1 ${lib1}`) //lib1 React
console.log({lib})
console.log({lib1})


// know performance of the task
const startTime = performance.now()
for(let i =0; i<=20; i++){
    console.log(i);
}
const endTime = performance.now()
console.log(`loop took ${endTime - startTime} millisecond to finish`);