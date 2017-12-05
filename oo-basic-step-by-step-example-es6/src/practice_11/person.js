class Person {
    constructor(id, name, age){
        this.id = id;
        this.age = age;
        this.name = name;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
module.exports = Person
