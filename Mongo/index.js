const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("collection successful !");

})
.catch((err)=>{
    console.log(err);
});

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userScheme = new mongoose.Schema({

    name:String,
    email:String,
    Phone_no:Number,
});

const User = mongoose.model("User",userScheme);


// User.insertMany([
//     {name:"akshat", email:"akshat@gmail.com", Phone_no:12345678},
//     {name:"vaishnavi", email:"vaishnavi@gmail.com", Phone_no:12387678},

// ]).then((res)=>{
//     console.log(res);
// })


User.deleteOne({name:"vaishnavi"}).then(res=>{console.log(res);}).catch(err=>{console.log(err);});