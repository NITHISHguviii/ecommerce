import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let navigate=useNavigate();
    let username="abc";
    let password="123"
    let login=()=>{
        if(username=="abc"&&password=="123"){
            navigate("/portal/dashboard")
                }else{
                    alert("wrong credientals")
                }      
    }
    
  return (
    
    <div class="container">

        <h1>welcome to app</h1>
        

<Link to="/portal/dashboard" class="btn btn-primary btn-user btn-block">
                                        Login
                                    </Link>
    

</div>
  )
}
 
export default Login