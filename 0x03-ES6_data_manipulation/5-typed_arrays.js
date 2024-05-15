export default function createInt8TypedArray(length, position, value){
    let buffer = new ArrayBuffer(length);
    let int8_Dataview = new DataView(buffer);
    if (position < 0 || position >= length){
        throw new Error('Position outside range');
    }
    else{
        int8_Dataview.setInt8(position, value);
    }
    return int8_Dataview;
}