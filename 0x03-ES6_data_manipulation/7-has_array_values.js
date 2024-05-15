export default function hasValuesFromArray(set_arg, arr){
    let result = arr.every((value) => set_arg.has(value));
    return result;
}