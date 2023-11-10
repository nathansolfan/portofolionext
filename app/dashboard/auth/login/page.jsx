"use client"
import React, { useEffect, useState } from 'react'
import LoginForm from './login'
import { supabase } from '@supabase/auth-ui-shared';

export default function LoginPage() {

  
  return (
    <main>
        <h2>This is a Login Title</h2>
        
        <LoginForm/>
          
    </main>
  )
}
