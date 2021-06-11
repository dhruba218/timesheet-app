import React from 'react'
import {useHistory} from 'react-router-dom'
import '../assets/CSS/Login.css'

function Login() {
    let history = useHistory();
    //history.push('/profile')

    return (
        <div>
        <h2>Timesheet Login Page | Coop</h2><br/>    
            <div className="login">    
                
                <input type="text" name="Uname" id="Uname" placeholder="Username" />    
                <br/><br/><br/>  
                
                <input type="Password" name="Pass" id="Pass" placeholder="Password" autoComplete="off" />    
                <br/><br/> <br/><br/><br/>    
                <button onClick={() => {
                        history.push('/profile');
                        }}
                        >
                        LOGIN
                        </button>
            </div>
        </div>
    );
}
export default Login;