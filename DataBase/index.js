const { faker } = require ("@faker-js/faker");
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta',
    password: 'akshat19'
  });

let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
let user =["123","123_newuser","abc@gmail.com","abc"];

 
  try{
  connection.query(q,user,(err,result)=>{
    if(err) throw err;
    console.log(result);
});
  }catch{
    console.log(err);
  };


connection.end();


let getRandomUser = ()=>{
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  };


