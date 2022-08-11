import React from 'react';


function Nav() {
   return(
      <nav className = 'nav-tabs'>
         <h2>Anthony Dcosta</h2>
         <ul className='nav-links-group'>
            <li className='nav-link'><a href='#about'> About </a></li>
            <li className='nav-link'><a href='#projects'> Projects </a></li>
            <li className='nav-link'><a href='#contacts'> Contacts </a></li>
            <li className='nav-link'><a href='#resume'> Resume </a></li>
         </ul>
      </nav>
   )
}

export default Nav;