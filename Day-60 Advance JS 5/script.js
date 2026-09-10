//callback practice ->

    // function abc(usernme,cb){
    //     //logic
    //     cb({id: 27429, user:"Raj", age:21})
    // }
    // abc("Malik", function(data){//data of cb function accepted here
    //     console.log(data)
    // })

//Practice 1 -> 
    // function afterDelay(time, cb){
    //     setTimeout(function(){
    //         cb();
    //     },time)
    // }
    // afterDelay(3000, function(){
    //     console.log("Developer")
    // })

//Practice 2 ->
    // function getUser(username,cb){
    //     console.log("Getthing user details..........")
    //     setTimeout(() => {
    //         cb({id:372783, username:"Raj"});
    //     }, 1000);
    // }
    // function getUserPost(id,cb){
    //     setTimeout(() => {          
    //         cb(["Hey","Good Day","Nice","Good Work"]);
    //     }, 2000);
    // }
    // getUser("Malik", function(data){
    //     getUserPost(data.id, function(allpost){
    //         console.log(data.username, allpost);
    //     })
    // })

//Practice 3 ->
    // function loginUser(username,cb){
    //     console.log("Logging user..........");
    //     setTimeout(() => {
    //         cb({id:742387, username:"Raj"});
    //     }, 1000);
    // }
    // function fetchPermission(id,cb){
    //     console.log("fetching permissions..........")
    //     setTimeout(() => {
    //         cb(["write","Read","Delete"])
    //     }, 2000);
    // }
    // function loadDashboard(permissions,cb){
    //     setTimeout(() => {
    //         cb();
    //     }, 2000);
    // }
    // loginUser("Malik", function(userData){
    //     fetchPermission(userData.id, function(permissions){
    //         loadDashboard(permissions, function(data){
    //             console.log("Dashboard Loaded")
    //         })
    //     })
    // })

//