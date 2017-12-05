class Class {
    constructor(number){
        this.number = number
    }
    getDisplayName(){
        return `Class ${ this.number }`
    }
    assignLeader(Student){
        if(Student.klass === this){
            this.leader = Student
            Student.id = 2
        }else {
            console.log(`It is not one of us.`)
        }
    }
    appendMember(Student){
        if(Student.klass.number !== this.number)
            Student.klass = this
    }
}
module.exports = Class
