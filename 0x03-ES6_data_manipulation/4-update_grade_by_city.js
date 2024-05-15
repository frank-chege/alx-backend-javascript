export default function updateStudentGradeByCity(std_arr, city, grades_arr){
    //compare each student id in the std array with the id in grades arr
    //if a match is found map the grade to the student obj
    //insert the grade to the student's object
    //map and filter the students array by location
    for (let obj of std_arr){
        for (let grade of grades_arr){
            if (obj.id === grade.studentId){
                obj.grade = grade.grade;
            }
            else{
                obj.grade = 'N/A'
            }
        }
    }
    let newArr = std_arr.filter((obj) => obj.location === city);
    return newArr;
}