export default function cleanSet(set_arg, startString){
    //get all values that start with a specific string
    //truncate the start string
    //add the remaining string to the string to be returned
    //separated by -
    let ret_str = '';
    for (let str of set_arg){
        if (str.includes(startString)){
            ret_str += str.replace(startString, '') + '-';
        }
    }
    ret_str = ret_str.slice(0, -1);
    return ret_str;
}