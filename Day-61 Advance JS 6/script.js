//promise -> 
    // const prms = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         reject();
    //     }, 3000);
    // })
    // prms 
    //     .then(function(){//run ewhen we resolved in Promise
    //         console.log("resolved")
    //     })
    //     .catch(function(){//run ewhen we rejected in Promise
    //         console.log("rejected")
    //     })

    // fetch(`https://randomuser.me/api/`)//pending till data fetching from this api. 2 "then" use in fetch
    // .then(function(notreadableData){
    //     return notreadableData.json();//json make readable data
    // })
    // .then(function(realData){
    //     console.log(realData.results[0].name.first);//now here readable data
    // })

//async await-> updation of uper code. await use only in function
    async function abc(){
        let raw = await fetch(`https://randomuser.me/api/`);
        let data = await raw.json();
        console.log(data);
    }
    abc();