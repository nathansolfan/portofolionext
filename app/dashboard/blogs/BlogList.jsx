
"use client"
import { createClient } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)  

export default function Bloglist() {
// state for the posts, an array
  const [posts, setPosts] = useState([])

  useEffect( () => {
    // create a function
    const fetchPosts = async () => {
      // supabase from the import and then .from to select folder name
      const {data, error} = await supabase.from('blog').select('*')

      // console log the errors      
      if(error){
        console.log(error)
      }
      // else change the state of posts to the data
      else{
        setPosts(data)
      }
    }
    fetchPosts()
    // , [] useEffect 2nd argument
  },[])

  return (
    <section>
      {posts.map((post) => (
        // the ID as supabase creates it automatically
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  )
}
