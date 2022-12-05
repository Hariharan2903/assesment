import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './pages/signup';
import Signin from './pages/signin'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
  </Routes>
  </BrowserRouter>  
  
  );
}

export default App;





// app.post('/Add',(request,response)=>{

//   let {firstname,lastname,email,dob,education,location,about} = request.body;

//   let sql = 'insert into students(firstname,lastname,email,dob,education,location,about,status) values (?,?,?,?,?,?,?,?)';

//   c.query(sql,[firstname,lastname,email,dob,education,location,about,0],(error,result)=>{
//       if(error){
//           let s = {"status":"error"}
//           response.send(s);
//       }
//       else{
//           let s = {"status":"Success"};
//           response.send(s);
//       }
//   })

// })

// app.get('/Studetails',(request,response)=>{

//   let sql = 'select * from students';

//   c.query(sql,(error,result)=>{
//       if(error){
//           response.send(error);
//       }
//       else{
//           response.send(result);
//       }
//   })

// })

// app.post('/Delete',(request,response)=>{
//   let id = request.body.id;
//   let sql = 'delete from students where id=?';
//   c.query(sql,[id],(error,result)=>{
//       if(error){
//           let s = {"status":"error"};
//           response.send(s);
//       }
//       else{
//           let s = {"status":"Success"};
//           response.send(s);
//       }
//   })
// })

// app.listen(3002, ()=>{console.log('Server running on port no : 3002')});
