import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
    <div className="logo">
      {/* Add your logo or site name here */}
      <h1>Site Name</h1>
    </div>    
      <Link href="/">Home</Link>
      <Link href="/dashboard/about">About</Link>
      <Link href="/dashboard/tickets/create">Blog</Link>
      <Link href="/dashboard/blogs">Ticket List</Link>     
  </nav>
  )
}
