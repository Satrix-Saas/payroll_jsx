import React from 'react'
import { Link } from 'react-router-dom'


export default function Adminheadermenu() {
  return (
    <ul className="header-new-menu " id="headerNewMenu">
    <li >
        <Link to="/" data-bs-toggle="dropdown"  id="clients" role="button" aria-haspopup="true" aria-expanded="false">Clients<i className='fa fa-angle-down'></i></Link>
        <ul className="dropdown-menu" >
            <li><Link className="dropdown-item" id="clients" to="clients.html">Clients</Link></li>
        </ul>
    </li>
    <li >
        <Link to="/" data-bs-toggle="dropdown" id="projects" role="button" aria-haspopup="true" aria-expanded="false">Projects<i className='fa fa-angle-down'></i></Link>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" id="projects" to="projects.html">Projects</Link></li>
            <li><Link className="dropdown-item" id="projects" to="tasks.html">Tasks</Link></li>
            <li><Link className="dropdown-item" id="projects" to="task-board.html">Task Board</Link></li>
        </ul>
    </li>
    <li >
        <Link to="/" data-bs-toggle="dropdown" id="leads" role="button" aria-haspopup="true" aria-expanded="false">Leads<i className='fa fa-angle-down'></i></Link>
        <ul className="dropdown-menu">
        <li><Link className="dropdown-item" id="leads" to="leads.html">Leads</Link></li>
        </ul>
    </li>
    <li >
        <Link to="/" data-bs-toggle="dropdown" id="tickets" role="button" aria-haspopup="true" aria-expanded="false">Tickets<i className='fa fa-angle-down'></i> </Link>
        <ul className="dropdown-menu" >
        <li><Link className="dropdown-item" id="tickets" to="tickets.html">Tickets</Link></li>
        </ul>
    </li>
</ul>
  )
}

