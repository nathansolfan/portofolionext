// since its not a server component, we have to add this line of code to make it client
"use client"
import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Import useState 
export default function AuthForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // Define the handleSubmit function to handle form submission
  // Define the handleSubmit function to handle form submission
  const handleSubmit = async (event, email, password) => {
    event.preventDefault();

    try {
      // Use Supabase to create a new user
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Error signing up:', error.message);
      } else {
        console.log('User signed up successfully:', user);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    // The form itself - label and span - add btn at end
    // Again (e) is the event from the form submission
    <form onSubmit={(e) => handleSubmit(e, email, password )}>
        <label>
            <span>Email:</span>
            <input
            type="text"
            // the onChange={ has a arrow function}
            // = () => setEmail()
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            />
        </label>
        {/* Password Form */}
        <label>
            <span>Password:</span>
            <input 
            type="password"
            onChange={(e)=> setPassword(e.target.value)} 
            value={password}
            required
            />
        </label>
        {/* When pressed we have access to the Event (e) on the onSubmit() */}
        <button className='btn-primary'>Submit</button>
    </form>
  )
}
