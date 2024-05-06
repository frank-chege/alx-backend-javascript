export default class Car{
    constructor(brand, motor, color){
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }
    cloneCar(brand, motor, color){
        return new Car(brand, motor, color);
    }
}