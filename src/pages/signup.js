import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function signup(){
    const handelsubmit = async(event) =>{
        event.preventDefault();
        var d = new FormData(event.target);
        
        let firstname=document.getElementById(firstname).value;
        let lastname=document.getElementById(lastname).value;
        let mail=document.getElementById(mail).value;
        let phone =document.getElementById(phone).value;
        let password=document.getElementById(password).value;
        
        if(firstname === '' || firstname === null){
            alert('enter firstname');
        }
        else if(lastname === '' || lastname === null){
            alert('enter lastname');
        }
        else if(password === '' || password === null){
            alert('password cannotbe empty');
        }
        else if(phone === '' || phone === null){
            alert('please enter phone number');
        }

else{
        await axios.post("http://localhost:3002/Signup",d)
              .then(function(a){
                if(a.data.status === 'error'){
                    alert('error');
                    window.location.href="/";
                }
                else if(a.data.status === 'success'){
                    alert('success ');
                    window.location.href="/";
                }
                else{
                    alert('cannot create');
                    window.location.href="/";
                }
              })
              .catch(function(error){
                alert(error);
                window.location.reload();
              })

    }
}
 
    return(
        <>
        <div className='container-fluid' >
<div className='row'>
    <div className='col-lg-4'>
        <div id='form'>
        <div className='text-center'>Signup</div>
        </div>
        </div>
<form >
<div className="row mt-5" >
                <div className="col-lg-2">
                    <label>First Name</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="firstname" id="firstname" className="form-control"/>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-2">
                    <label>Last Name</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="lastname" id="lastname" className="form-control"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-2">
                    <label>Email</label>
                </div>
                <div className="col-lg-3">
                    <input type="email" name="mail" id="mail" className="form-control"/>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-2">
                    <label>Phone</label>
                </div>
                <div className="col-lg-3">
                    <input type="number" name="phone" id="phone" className="form-control"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-2">
                    <label>Password</label>
                </div>
                <div className="col-lg-3">
                    <input type="password" name="password" id="password" className="form-control"/>
                </div>
             </div>

            <div className="row mt-3">
                <div className='col-lg-2'>
                <Link to="/signin">
                                    <button type="button" name="sign in" id="sign in" value="signin" className="btn btn-success">
                                        Sign-in
                                    </button>
                                </Link>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-2">
                <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary" onSubmit={handelsubmit} >
                    submit
                </button>
                </div>
            </div>
            </form>
            </div>
    </div>

</>
    )
}