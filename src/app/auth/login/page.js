"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const router = useRouter();

const handleLogin = async () => {

const res = await fetch("/api/auth/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
});

const data = await res.json();

if(data.success){

router.push("/home");

}else{

alert("Invalid login");

}

};

return(

<div className="auth-container">

<div className="auth-card">

<div className="auth-left">

<h1 className="logo">FinVision</h1>

<p className="description">
FinVision is an educational financial planning tool designed to help
investors understand goal-based investing, inflation impact and disciplined
SIP contributions.
</p>

<ul className="features">
<li>Goal-based investment planning</li>
<li>Inflation-adjusted goal estimation</li>
<li>Understanding SIP investing</li>
<li>Long-term compounding insights</li>
</ul>

</div>

<div className="auth-right">

<h2 className="title">Sign In</h2>

<label>Email</label>
<input
type="email"
placeholder="Enter your email"
className="input"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<label>Password</label>
<input
type="password"
placeholder="••••"
className="input"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<div className="options">

<label className="remember">
<input type="checkbox"/>
Remember me
</label>

<Link href="/auth/forgot-password" className="forgot">
Forgot password
</Link>

</div>

<button className="btn" onClick={handleLogin}>
Login
</button>

{/* Demo credentials text */}

<p style={{marginTop:"15px", fontSize:"14px", color:"#666"}}>
Demo Account for Judges <br/>
Email: mm6980657@gmail.com <br/>
Password: 1234
</p>

<p className="register">
Don’t have an account?
<Link href="/auth/register" className="register-link"> Register</Link>
</p>

</div>

</div>

<div className="help-button">?</div>

</div>

)

}