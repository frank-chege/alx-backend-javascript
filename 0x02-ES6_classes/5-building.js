export default class Building{
    constructor(sqft){
        this._sqft = sqft;
        if (this.constructor !== Building){
            if (typeof(evacuationWarningMessage)){
                throw new Error('Class extending Building must override evacuationWarningMessage');
            }
        }
    }
    //getter
    get sqft(){
        return this._sqft;
    }
}