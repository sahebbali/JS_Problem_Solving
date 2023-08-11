// Input: const result = ["apple","apple","Banana","Banana",'tip','tip','tip',1,2,1,2,3];
// output: {'apple': 2, 'Banana':2, "tip":2, 1:2, 2:2 .....}

const result = ["apple","apple","Banana","Banana",'tip','tip','tip',1,2,1,2,3];

function FilterData(data){
    const output = {};
    data.map((d)=>{
        output[d] = (output[d] || 0) + 1;
    })

    return output;
}

console.log(FilterData(result));



// Input: "I love Bangladesh"
// Output: I evol hsedalgnaB
// const str = "I love Bangladesh";

// function RerseString(data){
//     const dataArray = data.split(" ");
    
//    let result = dataArray.map((d)=>{
//        return d.split("").reverse().join("");
//         console.log(d)
//     })
//     console.log(result)
//     return result.join(" ");
// }
// console.log(RerseString(str))


// string words by length in a sentence by as order.
// Input: Java is a Programing language
// Output:a is Java language Programing

// const str  = "Java is a Programing language";
// function sortWord(data){
//     const dataArray = data.split(" ");
//     dataArray.sort((a,b)=>{
//         return a.length - b.length;
//     })
//     return dataArray.join(" ");
// }
// console.log(sortWord(str));

// const data = [1,2,3,44,5,52,2,23,24,25,333];
// function ascOrder(data){
//  const result = data.sort((a,b)=>{
//       return b -a  
//       })
//     console.log(result);
// }
// console.log(ascOrder(data))
const data = [1,2,3,44,5,52,2,23,24,25,333];
function ascOrder(data){
    const len = data.length;
    for(let j = 0; j< len -1; j++){
        for(let i = 0; i<=len-j-1; i++){
        if(data[i] < data[i + 1]){
            const team = data[i];
            data[i] = data[i+1];
            data[i+1] =team;
            }
        }
    }
    return data;
}
 
console.log(ascOrder(data))