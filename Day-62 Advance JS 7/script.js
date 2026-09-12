//Error Handling
// Syntax error -> 
    // lent a =20

// runtime error -> 
    // function abc(){
    //     let a = 34;
    //     console.log(a.name.first)
    // }

// logical error -> 
    // function add(a,b){
    //     console.log(a*b);
    // }
    // add(3,5)

//handling error->  using try & catch
    // try{
    //     let a = 234
    //     console.log(a.name.age)
    // }
    // catch(err){
    //     // console.error(err)
    //     // console.log(err)
    //     // console.log(err.message)
    //     // console.log(err.name)
    //     console.log(err.stack)
    // }
    // finally{
    //     console.log("Always run Finally")
    // }

//Throw error in JS->
    //throw new Error("somthing went wrong")
    console.error( new Error("somthing went wrong"))

    try{
        let a = 65;
        console.log(a.name.age);
    }
    catch(err){
        throw new Error("Somthing went wrong from our side");
    }