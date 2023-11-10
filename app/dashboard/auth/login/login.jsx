"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { createClient } = require("@supabase/supabase-js");

// createCliente from supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// import usestate
export default  function LoginForm() {  
  const [error, setError] = useState('')
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

 // Login Component
const handleSubmit = async (e, email, password) => {
  e.preventDefault()
  setError('')

  const supabase = createClientComponentClient()

  try {
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Handle successful login here
      console.log('User signed in successfully:', user);
      router.push('/')
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};


  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label>
        <span>Email:</span>
        <input
        type="text"
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        required        
        />
      </label>
      <label>
        <span>Password</span>
        <input 
        type="text" 
        onChange={(e)=> setPassword(e.target.value)}
        value={password}
        required
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  )
}
