// class Remote{
//     constructor(){
//         this.product = "daikin";
//         this.price = 12300;
//         this.color = "white";
//     }
//     powerOn(){
//         console.log("Machine is ON now");
//     }
//     powerOff(){
//         console.log("Machine is OFF now");
//     }
// }
// let remote = new Remote();

// I will tell you about product

// class Remote{
//     constructor(product, price, color){
//         this.product = product;
//         this.price = price;
//         this.color = color;
//     }
//     powerOn(){
//         console.log("Machine is ON now");
//     }
//     powerOff(){
//         console.log("Machine is OFF now");
//     }
// }
// let remote1 = new Remote("Samsumg", 20000, "blue");
// let remote2 = new Remote("Samsumg", 20000, "white");
// let remote3 = new Remote("Samsumg", 20000, "black");

//lets Make a Biscuit

// class Biscuit{
//     constructor(){
//         this.name = "liksy";
//         this.price = 15;
//         this.taste = "sweet"
//     }
//     pack(){
//         console.log("Biscuit Packed")
//     }
//     packoff(){
//         console.log("Biscuit Un-packed")
//     }
// }
// let biscuit = new Biscuit();
// biscuit.pack();

// Prototype->

class Human{
    constructor(){
        this.name = "Loocy";
        this.age = 19;
    }
}
Human.prototype.takeBreathe = function(){
    console.log("Take Brathe and Live");
}
Human.prototype.eatFood = function(){
    console.log("Eat Food and take Energy")
}
let h1 = new Human();
let h2 = new Human();