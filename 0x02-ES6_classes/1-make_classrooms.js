import ClassRoom from "./0-classroom";
export default function initializeRooms(){
    //declare an array
    let array = [];
    let values = [19, 20, 34];
    for (let index of values){
        let obj = new ClassRoom(index);
        array.push(obj);
    }
    return array;
}