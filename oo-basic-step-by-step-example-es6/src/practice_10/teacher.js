import Person from './person'

class Worker extends Person{
    constructor(id, name, age, Class){
        super(id, name,age)
        this.klasses = Class
    }
    introduce(){
        if(this.klasses){
            let midresult = [];
            for(var i in this.klasses){
                midresult.push(this.klasses[i].number);
            }
            return super.introduce() + ` I am a Teacher. I teach Class ${ midresult.join(', ') }.`
        }
        else
            return super.introduce() + ` I am a Teacher. I teach No Class.`
    }
    introduceWith(Student){
        if(Student.klass === this.klass )
            return super.introduce() + ` I am a Teacher. I teach ${ Student.name }.`
        else
            return super.introduce() + ` I am a Teacher. I don't teach ${ Student.name }.`
    }
    isTeaching(Student){

    }
}
module.exports = Worker
