import Person from './person'

class Worker extends Person{
    constructor(name, age, Class){
        super(name,age)
        this.klass = Class
    }
    introduce(){
        if(this.klass)
            return super.introduce() + ` I am a Teacher. I teach ${ this.klass.getDisplayName() }.`
        else
            return super.introduce() + ` I am a Teacher. I teach No Class.`
    }
    introduceWith(student){
        if(this.klass.number === student.klass.number)
            return super.introduce() + ` I am a Teacher. I teach ${ student.name }.`
        else
            return super.introduce() + ` I am a Teacher. I don't teach ${ student.name }.`
    }
}
module.exports = Worker
