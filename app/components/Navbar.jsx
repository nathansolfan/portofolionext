import Link from "next/link";


export default function Navbar() {

  return (
    <nav>
    <div className="logo">
      {/* Add your logo or site name here */}
      <h1>Site Name</h1>
    </div>    
      <Link href="/">Home</Link>
      <Link href="/pages/about">About</Link>
      <Link href="/pages/tickets/create">Blog</Link>
      <Link href="/pages/blogs">Ticket List</Link>
      <Link href="/pages/weather">Weather</Link> 
      <Link href="/signup">Signup</Link>   
      <Link href="/login">Login</Link>    

      {/* {user && <span>Hello, {user.email}</span>} */}

    
     
  </nav>
  )
}
