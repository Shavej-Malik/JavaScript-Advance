class Bottle{
    constructor(){
        this.price = 130;
        this.color = "pink";
        this.material = "plastic";
    }
    //Prototype-> will show in every new object
    //If we write in class then automatically add on prototype
    fill(){}
    drink(){}
    emty(){}
}
let bottle1 = new Bottle()
let bottle2 = new Bottle()