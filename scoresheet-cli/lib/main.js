var readlineSync = require('readline-sync');

module.exports = () => {
    var query = require('cli-interact').getChar;
    console.log(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`)
    let students = []
    let student = {}
    let choice = query(``, `123`, ' ');
    while(choice !== '3'){
        if(choice === '1'){
            let stu_name = readlineSync.question('请输入学生姓名：');
            let stu_id = readlineSync.question('请输入学生学号：');
            let stu_math = readlineSync.question('请输入学生数学成绩：');
            let stu_chi = readlineSync.question('请输入学生语文成绩：');
            let stu_eng = readlineSync.question('请输入学生英语成绩：');
            students.push({
                stu_name:stu_name,
                stu_id: stu_id,
                stu_math: Number(stu_math),
                stu_chi: Number(stu_chi),
                stu_eng: Number(stu_eng)
            })
            console.log(`学生 ${stu_name} 添加成功`)
            console.log(students)
        }else if(choice === '2'){
            console.log('成绩单\n' + '姓名|数学|语文|英语|编程|平均分|总分\n' + '==============================\n')
            for(index in students){
                console.log(`${students[index].stu_name}|${students[index].stu_name}|${students[index].stu_chi}|${students[index].stu_eng}|`+ 
                (parseInt(students[index].stu_chi)+parseInt(students[index].stu_name)+parseInt(students[index].stu_eng)) +'|' 
                + (parseInt(students[index].stu_chi)+parseInt(students[index].stu_name)+parseInt(students[index].stu_eng))/3
            )
            }
        }
        console.log('1. 添加学生\n' + '2. 生成成绩单\n' + '3. 退出\n'+ '请输入你的选择（1～3）：\n')
        choice = query(``, `123`, ' ');
    }

}