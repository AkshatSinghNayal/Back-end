let figlet = require("figlet")

figlet(" Akshat 004 !!!!! ",(err,data)=>{
    if(err){
        console.log("something went wrong...");
        return;
    }
    console.log(data);
});

