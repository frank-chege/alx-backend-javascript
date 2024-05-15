export default function updateStudentGradeByCity(std_arr, city, grades_arr){
    //compare each student id in the std array with the id in grades arr
    //if a match is found map the grade to the student obj
    //insert the grade to the student's object
    //map and filter the students array by location
    let newArr = std_arr.map((obj) => {
        for (let grade of grades_arr){
            if (obj.id === grade.studentId){
                obj.grade = grade.grade;
                return obj;
            }
            else{
                obj.grade = 'N/A'
                return obj;
            }
        }
    })
    let filtered_arr = newArr.filter((student) => student.location === city);
    return filtered_arr;
}