export default function getListStudentIds(arr){
    let id_arr = [];
    if (Array.isArray(arr)){
        for (let obj of arr){
            id_arr.push(obj.id);
        }
        return id_arr;
    }
    else{
        return id_arr;
    }
}