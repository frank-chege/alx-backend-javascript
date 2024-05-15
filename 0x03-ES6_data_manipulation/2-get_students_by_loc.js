export default function getStudentsByLocation(arr, city){
    let filtered_arr = arr.filter((student) => student.location === city);
    return filtered_arr;
}