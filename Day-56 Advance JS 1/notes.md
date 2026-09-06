OOPs -> code devided into Object,classes and function
    - modular , Scalable , manageable , easy to fix , reuse code
Classes -> like Blueprint
 - cinstructor -> It runs automatically

-> class Biscuit{ [class is a factory of object]
    constructor(){
        this.name = "liksy";{Here "this" is a empty object}
        this.price = 15;
        this.taste = "sweet"
    }
}
let biscuit = new Biscuit();{Here "new" mean create a blank object and "this" keyword fill that blank object}

-> value of "this" keyword decided when run [Value Chnage-able]

-> prototype => Run on every new called class
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
 let h1 = new Human();[prototype]-> Run on every new called class
 let h2 = new Human();