"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Register(){

const router = useRouter();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = async () => {

  const res = await fetch("/api/auth/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,
      email,
      password
    })
  });

  const data = await res.json();

  if(data.success){

    alert("Registration successful");

    // redirect to login page
    router.push("/auth/login");

  }else{

    alert(data.message || "Registration failed");

  }

};

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white p-8 rounded-xl shadow-md w-[420px]">

<h2 className="text-2xl font-semibold mb-6 text-center">
Create Account
</h2>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border p-3 rounded mb-4"
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded mb-4"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border p-3 rounded mb-6"
/>

<button
onClick={handleRegister}
className="w-full bg-[#224c87] text-white py-3 rounded-lg"
>
Register
</button>

<p className="text-sm text-center mt-4">
Already have an account?
<Link href="/auth/login" className="text-blue-600 ml-1">
Login
</Link>
</p>

</div>

</div>

)}