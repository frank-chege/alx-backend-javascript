export default  class HolbertonClass{
    constructor(size, location){
        this._size =  size;
        this._location = location;
    }
    //when cast to number
    valueOf(){
        return this._size;
    }
    //when cast to string
    toString(){
        return this._location;
    }
}