.promises-> here are three condition 1.pending 2.resolve 3.rejected
->  const prms = new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject();
        }, 3000);
    })
    prms 
        .then(function(){//run ewhen we resolved in Promise
            console.log("resolved")
        })
        .catch(function(){//run ewhen we rejected in Promise
            console.log("rejected")
        })

.async await-> work on promise and use with function