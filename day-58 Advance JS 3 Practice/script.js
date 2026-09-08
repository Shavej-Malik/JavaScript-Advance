//create a user that store name and email and has a login method which print "user logged in"
    // let user = {
    //     name: "Malik",
    //     email:"malik@gmail.com",
    //     login:function(){
    //         console.log("Looged in")
    //     }
    // };
    // user.login();
 //Imagine you have 5 user then how you will handle
    // class User{
    //     constructor(name,email){
    //         this.name = name;
    //         this.email = email;
    //     }
    //     LoggedIn(){
    //         console.log("Logged in Successfully");
    //     }
    // }
    // let user1 = new User("priya", "priya@gmail.com");
    // let user2 = new User("prem", "prem@gmail.com");
    // let user3 = new User("veshali", "veshali@gmail.com");
    // let user4 = new User("Anwar", "Anwar@gmail.com");
    // let user5 = new User("shivani", "shivani@gmail.com");

//create a product object that store name and price and has a method which return the final price after disscount
    // let product = {
    //     name:"bajaj",
    //     price:1500,
    //     discountedPrice:function(){
    //         return this.price - 200;
    //     },
    // };
    // console.log(product.discountedPrice());

//create a car class with brand speed a drive method that print card brand and speed

    // class Car{
    //     constructor(brand,speed){
    //         this.brand = brand;
    //         this.speed = speed;
    //     }
    //     drive(){
    //         console.log(this.brand + " - " + this.speed)
    //     }
    // }
    // let car = new Car("toyota",300);
    // car.drive();

//create a class whose accept name and roll no. add a method that print both value

    // class Student{
    //     constructor(name, rollno){
    //         this.name = name;
    //         this.rollno = rollno;
    //     }
    //     value(){
    //         return (this.name + " + " + this.rollno)
    //     }
    // }
    // let student1 = new Student("Harshita", 98)
    // let student2 = new Student("lovan", 78)
    // let student3 = new Student("ballu", 58)

//create two object with a normal function and one aarrow function and check vaue of this in both function

    // let obj = {
    //     normal:function(){
    //         console.log(this)
    //     },
    //     arrow:()=>{
    //         console.log(this)
    //     }
    // }
    // obj.normal();
    // obj.arrow();

//create a constructor without class

    function Human(){
        this.name = "Lovan";
        this.age = 21;
    }
    let h = new Human();