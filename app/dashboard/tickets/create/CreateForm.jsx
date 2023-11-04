// This is the actual form, since has user input, it has to be client component as NextJS is server by standard
"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
// import createClient
import { createClient } from '@supabase/supabase-js'

// create supabase instance - outside function
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)  

export default function CreateForm() {
    const router = useRouter()    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
     
    // const handleSubmit is equal to a arrow function, inside it has the fetch request
    const handleSubmit = async (e) => {
      // So page doesnt reload
      e.preventDefault()
      // const {} = supabase since it needs time to load, add make it async
      const {data, error} = await supabase.from('blog').insert([{title,body}])

      if(error){
        console.log(error, error.message)
      }
      else{
        console.log('Blog has been added:', data)
        router.push('/');
      }
      

    }

  return (
    // Create form
    <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
        required
        type='text'
        // Remember onChange={} fires an arrow function
        // Access to event, and .target.value to get its value
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        />
        <label>Body:</label>
        <input
        required
        type='text'
        onChange={(e)=> setBody(e.target.value)}
        value={body}
        />
        <button type="submit">Create Blog</button>
    </form>    
  )
}
