import Person from './person'
class Worker extends Person{
    constructor(name, age, klass){
        super(name,age)
        this.klass = klass
    }
    introduce(){
        if(this.klass)
            return super.introduce() + ` I am a Teacher. I teach Class ${ this.klass }.`
        else
            return super.introduce() + ` I am a Teacher. I teach No Class.`
    }
}
module.exports = Worker
