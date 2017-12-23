class Class {
    constructor(number){
        this.number = number
        this.students = []
    }
    getDisplayName(){
        return `Class ${ this.number }`
    }
    assignLeader(Student){
        if( Student.klass && Student.klass === this ){
            this.leader = Student
            Student.id = 2;
            if( this.teacher && Student )
                console.log(`I am ${ this.teacher.name }. I know ${ Student.name } become Leader of Class ${ this.number }.`)
        }else {
            console.log(`It is not one of us.`)
        }
    }
    appendMember(Student){
        if( Student.klass.number !== this.number ){
            Student.klass = this
            this.students.push(Student)
            if( this.teacher && Student )
                console.log(`I am ${ this.teacher.name }. I know ${ Student.name } has joined Class ${ this.number }.`)
        }
    }
    registerAssignLeaderListener(Teacher){
        this.teacher = Teacher

    }
    registerJoinListener(Teacher){
        this.teacher = Teacher
    }


}
module.exports = Class
