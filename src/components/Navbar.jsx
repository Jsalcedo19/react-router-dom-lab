import React from 'react'
import Link from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <link to="/">Home</link>
    <link to="/mailboxes">Mailbox</link>
    <link to="/mailboxes/new">New Mailbox</link>
    <div>Navbar</div>   
    </>
  )
}

export default Navbar