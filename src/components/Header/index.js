import React from 'react';
import Nav from '../Nav';

function Header({currentPage, handleCurrentPage}){
   return (
      <>
         <header className='heroContainer'>
            <Nav currentPage={currentPage} handleCurrentPage={handleCurrentPage}></Nav>
         </header>
      </>
   )
}

export default Header