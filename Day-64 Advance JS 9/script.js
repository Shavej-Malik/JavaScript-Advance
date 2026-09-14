//debouncing and Throttling
  //Debounce
    // function debounce(fn, delay){// run fn after delay
    //     let timer;
    //     return function(){
    //         clearTimeout(timer);
    //         timer= setTimeout(fn, delay)
    //     };
    // }
    // document.querySelector("#search").addEventListener(
    //     "input", debounce(function(){
    //         console.log("Run");
    //     }, 400) 
    // )

  //Throttling
    // function throttle(fn, delay){
    //     let last = 0;
    //     return function(){
    //         const now = Date.now();
    //         if(now - last >= delay){
    //             last = now;
    //             fn();
    //         }
    //     };
    // }
    // window.addEventListener("mousemove", throttle(function(){
    //         console.log("Trottling....")
    //     },2000)
    // )

// 1.json stringify -> we create JSON with this

// 2.json parse -> we create object with this