const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const e = require('cors');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Hari@4157663",
    database : "reg"
})

c.connect(function(error){
    if(error) throw error
    console.log('Connected')
})
app.post('/signup',(request,response)=>{

  let {firstname,lastname,mail,phone,password} = request.body;

  let sql = 'insert into details(firstname,lastname,mail,phone,password) values (?,?,?,?,?)';

  c.query(sql,[firstname,lastname,mail,phone,password],(error,result)=>{
      if(error){
          let s = {"status":"error"}
          response.send(s);
      }
      else{
          let s = {"status":"Success"};
          response.send(s);
      }
  })

})