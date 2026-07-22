import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";


function Login(){

const navigate=useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");



const handleLogin=(e)=>{

e.preventDefault();


const users = JSON.parse(
localStorage.getItem("users")
) || [];


const user = users.find(

(item)=>

item.email === email &&
item.password === password

);



if(!user){

setError("Invalid email or password");

return;

}



if(
user.email===email &&
user.password===password
){


localStorage.setItem(
"isLoggedIn",
true
);

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

alert("Login successful");


navigate("/");


}

else{

setError("Invalid email or password");

}


};



return(

<div className="auth-container">


<div className="auth-box">


<h2>
Welcome Back
</h2>


{
error &&
<p className="error">
{error}
</p>
}



<form onSubmit={handleLogin}>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>



<button>

Login

</button>


</form>


<p>

New User?

<span onClick={()=>navigate("/signup")}>

 Create Account

</span>

</p>


</div>

</div>

)

}


export default Login;