// what will be the output of the below code?
console.log([] + []); // "" empty
console.log({} + []); // [object object]


// what will be the output of the below code?
function myFunc(){
    console.log({arguments})
    return "Bangladesh";
}
const string =  myFunc `hello`;
console.log(string); // Bangladesh

// how to creat erery website in editable?
document.body.contentEditable= true;


// what will be the output of the below code?

function b (){
    console.log(`the length is ${this.length}`);
}

let a = {
    length: 10,
    method: function(b){
        arguments[0]();
    }
};
a.method(b,4);

// what will be the output of the below code?
const ab = 'constructor';
console.log(ab[ab](45));   // 45  -- prototype of String funciton line String ("45")


// what will be the output of the below code?
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.1 + 0.3) // 0.4

// what will be the output of the below code?
console.log(("Bangladesh").__proto__.__proto__.__proto__) // null
console.log(("Bangladesh").__proto__.__proto__) // [Object: null prototype] {}
console.log(("Bangladesh").__proto__) // {}

// make a function that sarts its argument without using loop
const myFunc = function(){
    return [].slice.call(arguments).sort();
}
console.log(myFunc(1,2,6,4));