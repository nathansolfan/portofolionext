import { useState } from "react";

const { createClient } = require("@supabase/supabase-js");

// createCliente from supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// import usestate
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <form>
      <label>
        <span>Email:</span>
        <input
        type="text"
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        required        
        />
      </label>
    </form>
  )
}
