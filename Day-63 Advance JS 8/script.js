//Scenariio 1 ->

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${Delhi}&appid=${apikey}`
// let url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=a084517f8d723bcca53a69499c23ff65`

    // function Weather(city){
    //     let apikey = `a084517f8d723bcca53a69499c23ff65`;
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    //         .then((raw)=> raw.json())
    //         .then((result)=>{
    //         console.log(result)
    //     })
    // }
    // Weather("London");

    // async function Weather(city){
    //     let apikey = `a084517f8d723bcca53a69499c23ff65`;
    //     let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    //     let realData = await raw.json();//jab tak api fetch nhi hoti tab tak tum bhi wait kro  is liye yha pr bhi await lgaya
    //     console.log(realData);
    // }
    // Weather("London");

    // async function Weather(city){
    //     try{
    //         let apikey = `a084517f8d723bcca53a69499c23ff65`;
    //         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    //         // console.log(raw);
    //         if(!raw.ok){
    //             throw new Error("City not found, try somthing else.")
    //         }
    //         else{
    //             let realData = await raw.json();
    //             console.log(realData);
    //         }
    //     }
    //     catch(err){
    //         console.log(err.message)
    //     }
    // }
    // Weather("London");