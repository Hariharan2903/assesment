import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function signin(){
    return(
        <>
        <div className='container-fluid' >
<div className='row'>
    <div className='col-lg-12'>
        <div id='form'>
        <div className='text-center'>Signin</div>
        </div></div>
        <form >
            <div className='text-center'>
<div className="row mt-5" >
            <div className='col-lg-2'>
                <label>User name</label>
                </div>
                <div className='col-lg-3'>
                    <input type='text' name='username' id='username' className='form-control'/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-2'>
                    <label>Password</label>
                </div>
                <div className='col-lg-3'>
                    <input type='password' name='password1'  id='password1' className='form-control'/>
                </div>
            </div>
            <div className="row mt-3">
                <div className='col-lg-2'>
                <Link to="/">
                                    <button type="button" name="signup" id="signup" value="signup" className="btn btn-success">
                                        Sign-up
                                    </button>
                                </Link>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-2">
                <button type="submit" name="submit" id="submit" value="submit" className="btn btn-secondary">
                    submit
                </button>
                </div>
            </div>
            </div>
                </form>
                </div>
                </div>
                
                </>
    )
}