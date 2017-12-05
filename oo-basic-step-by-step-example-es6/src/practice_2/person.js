class Person {
    constructor(name,age){
        this.age = age;
        this.name = name;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
module.exports =  Person