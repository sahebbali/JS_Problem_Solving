
class Player {   // class is a buluprient of the actual object
    constructor(name, age, skill){ // constructor is a building funcion its autometicaly call in the class
        this.name = name,
        this.age = age,
        this.skill = skill;
    };
    sayhello(){
        return `Hi This is ${this.name} I am ${this.age} I am a ${this.skill}`;
    };
};

const saheb = new Player("Saheb ali" , 26, "JavaScript Developer");
console.log(saheb.sayhello())
console.log({saheb})



/// Encapsulation 
// Functional Programming 

// const ali = {
//     name: "Saheb ali",
//     birthday: '1997-08-25',
//     salary: 20000,
//     month: 10,

//     getSalary(){
//         return (this.salary * this.month).toLocaleString();
//     },
    
//     getBirth(){
//         const diff =   Date.now() - new Date(this.birthday).getTime();
//         const getdate = new Date(diff);
//         return Math.abs(getdate.getUTCFullYear()-2023);
//     }
// }

// console.log(ali.getBirth())
// console.log(ali.getSalary())


// object oriented 

// class Player{
//     // priver property can not access out side of the class
//     #name;
//     #salary
//     constructor(name, salary, dathofBirth, numberOfMonth) {
//         this.#name = name,
//         this.#salary = salary,
//         this.dathofBirth = dathofBirth,
//         this.numberOfMonth = numberOfMonth
//     };
//     getSalary(){
//      return (this.salary * this.numberOfMonth).toLocaleString();
//  }
            
//     getBirth(){
//         const diff =   Date.now() - new Date(this.dathofBirth).getTime();
//         const getdate = new Date(diff);
//         return Math.abs(getdate.getUTCFullYear()-2023);
//         }
// }

// const ali =  new Player("Saheb Ali" , 20000, "1996-09-21" , 13);
// console.log(ali.getBirth())
// console.log(ali.name)
// console.log(ali.numberOfMonth)


// inheritance

// class Player{
//     // priver property can not access out side of the class
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name,
//         this.#age = age
//     }
//     getPalyer(){
//         return `${this.#name} is ${this.#age} year old.`
//     }
// }

// class Cricketer extends Player{
//     constructor(name, age, centuries){
//         super(name, age)
//         this.centuries = centuries;
//     }
// }

// class Footballer extends Player {
//     constructor(name, age, goals){
//         super(name,age)
//         this.goals = goals
//     }
// }

// const ali =  new Cricketer("ali", 26, 20)
// console.log(ali.getPalyer())
// const rolondo =  new Footballer ("Rolando",30, 300);
// console.log(rolondo.getPalyer());



// Abstraction 
// Hide implementation and show diclearative way to write code 
class BetterArray {
    #item;
    constructor(){
        this.#item = [];
    }

    getItems(){
        return [...this.#item];
    }

    addItems(item){
        this.#item.push(item)
    }
    removeItems(ItemDelete){
        this.#item =  this.#item.filter((i) => i !== ItemDelete);
    }
    updateItems(itemToChange, newValue){
        const index = this.#item.indexOf(itemToChange)
        if(index !== -1){
            this.#item[index] = newValue;
        }
    }
}

// const array = new BetterArray();
// array.addItems("I am 32 years old");

// console.log(array.getItems())

// array.updateItems("I am 32 years old", "I am 34")
// console.log(array.getItems())
// array.removeItems("34")
// console.log(array.getItems())



// Pholimorphom

class Player{
    // priver property can not access out side of the class
    #name;
    #age;
    constructor(name, age) {
        this.#name = name,
        this.#age = age
    }
    getName(){ // getter 
        return this.#name;
    }
    getAge(){     // getter
        return this.#age;
    }
    getPalyer(){
        return `${this.#name} is ${this.#age} year old.`
    }
}

class Cricketer extends Player{
    constructor(name, age, centuries){
        super(name, age)
        this.centuries = centuries;
    }
    getPalyer(){ // Its call overWriting. it method will be same in the parent class method but different structure.
        return `${this.getName()} হয় একজন খোলোয়ার । তার বয়স${this.getAge()} বছর। `
    }
}

class Footballer extends Player {
    constructor(name, age, goals){
        super(name,age)
        this.goals = goals
    }
}

const ali =  new Cricketer("ali", 26, 20)
console.log(ali.getPalyer())
const rolondo =  new Footballer ("Rolando",30, 300);
console.log(rolondo.getPalyer());

