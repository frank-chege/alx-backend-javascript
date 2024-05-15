export default function getStudentIdsSum(arr){
    let sum_ids = arr.reduce((total, student) => {
        return total + student.id
    }, 0);
    return sum_ids;
}