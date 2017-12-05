import Person from './person'

class Student extends Person{
    constructor(id, name, age ,Class){
        super(id, name,age);
        this.klass = Class;
    }
    introduce(){
        if(this.id !== 1)
            return super.introduce() + ` I am a Student. I am Leader of ${ this.klass.getDisplayName() }.`
        else
            return super.introduce() + ` I am a Student. I am at ${ this.klass.getDisplayName() }.`
    }
}
module.exports = Student