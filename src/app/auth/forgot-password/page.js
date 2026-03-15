"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword(){

const [email,setEmail] = useState("");

const handleReset = async () => {

await fetch("/api/auth/forgot-password",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({email})
});

alert("Reset link sent");

};

return(

<div className="auth-container">

<div className="auth-card">

<div className="auth-left">

<h1 className="logo">FinVision</h1>

<p className="description">
Reset your password to continue using FinVision financial tools.
</p>

</div>

<div className="auth-right">

<h2 className="title">Reset Password</h2>

<label>Email</label>
<input
className="input"
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button className="btn" onClick={handleReset}>
Send Reset Link
</button>

{/* Disclaimer added for prototype */}

<p className="text-xs text-gray-500 mt-4 leading-relaxed">
<strong>Disclaimer:</strong> This password reset feature is implemented for demonstration
purposes in this prototype. In a production system, the reset link would be
securely delivered to the user's registered email address using an email
verification service with token-based authentication.
</p>

<p className="register">
Back to
<Link href="/auth/login" className="register-link"> Login</Link>
</p>

</div>

</div>

<div className="help-button">?</div>

</div>

)

}