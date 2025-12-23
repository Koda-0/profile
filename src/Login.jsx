import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import "./form.css"; 

export default function Login(){
    const [admin,setAdmin]= useState("");
    const [password,setPass]= useState("");
    const navigate = useNavigate();

    function handlesubmit(e){
        e.preventDefault();

          if(admin.trim() ==="" || password.trim() ===""){
          alert("All Fields are required");
           }

       else{
           axios.post("http://localhost:3000/login",{
            username: admin.trim(),
            password: password.trim()
           })
           .then(function(response){
            alert(response.data.message);
            setAdmin("");
            setPass("");

            if(response.data.message){
                navigate("/Dash");
                        }
           })
           .catch(function (error){
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Something Went Wrong!");
            }
            console.log(error);
           })

        }
    }
    return(
        <>
        <div className="login-container">
            <form onSubmit={handlesubmit} method="post">
                <h2>Admin Portal!</h2>
                <input type="text" 

                placeholder="Admin names"

                id="names" 

                name="names" 

                value={admin} 

                onChange={(e)=>{
                   setAdmin(e.target.value)
                }}
                /> <br /> <br />
                <input type="password" 
                
                placeholder="Password" 
                
                id="password" name="password" 
                
                value={password} 
                
                onChange={(e)=>{
                    setPass(e.target.value)
                }}
                /> <br /> <br />

                <button type="submit">Login</button> <br /> <br />
                <center>
                <span><Link to="/Index">🏠Back To Home?</Link></span>
                </center>
            </form>
        </div>
        </>
    )
}