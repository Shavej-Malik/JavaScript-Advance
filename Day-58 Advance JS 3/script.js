// class Human{
//     constructor(){
//         this._age = 21;//here "_" showing that this is private but we can change the value of age
//     }
// }
// let h1 = new Human();
// h1._age = 27;

//getter & setter

class Human{
    constructor(){
        this._age = 21;
    }
    set age(val){
        if(val<0){
            console.error("Not Possible");
            return;
        }
        this._age = val;
        return this._age;
    }
    get age(){
        return this._age;
    }
}
let h1 = new Human();
// h1.age = 30
console.log(h1.age)