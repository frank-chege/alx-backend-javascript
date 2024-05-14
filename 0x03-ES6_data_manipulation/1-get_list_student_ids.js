export default function getListStudentIds(arr){
    let id_arr = [];
    if (Array.isArray(arr)){
        id_arr = arr.map((obj) => obj.id)
        return id_arr;
    }
    else{
        return id_arr;
    }
}