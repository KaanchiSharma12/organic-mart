import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";


function Signup(){

const navigate = useNavigate();


const [formData,setFormData] = useState({

name:"",
email:"",
password:""

});


const [error,setError] = useState("");



const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};



const handleSubmit=(e)=>{

e.preventDefault();


if(
!formData.name ||
!formData.email ||
!formData.password
){

setError("Please fill all fields");

return;

}



const existingUser = JSON.parse(
localStorage.getItem("user")
);



if(existingUser && existingUser.email===formData.email){

setError("User already exists");

return;

}



const users = JSON.parse(
  localStorage.getItem("users")
) || [];


const userExist = users.find(
  (user)=> user.email === formData.email
);


if(userExist){

setError("Email already registered");

return;

}


users.push(formData);


localStorage.setItem(
"users",
JSON.stringify(users)
);



alert("Signup successful");


navigate("/login");


};



return(


<div className="auth-container">


<div className="auth-box">


<h2>
Create Account
</h2>


<p>
Join OrganicMart today
</p>



{
error &&
<p className="error">
{error}
</p>
}



<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Full Name"

value={formData.name}

onChange={handleChange}

/>



<input

type="email"

name="email"

placeholder="Email Address"

value={formData.email}

onChange={handleChange}

/>



<input

type="password"

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

/>



<button>

Create Account

</button>


</form>



<p>

Already have account?

<span onClick={()=>navigate("/login")}>

 Login

</span>

</p>


</div>


</div>


)

}


export default Signup;