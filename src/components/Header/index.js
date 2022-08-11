import React, {useState} from 'react';
import Nav from '../Nav';

function Header(){
   const [currentPage, setCurrentPage] = useState('About');
   const handleCurrentPage = (page) => {
      setCurrentPage(page);
   }
   return (
      <header className='heroContainer'>
         <Nav currentPage={currentPage} handleCurrentPage={handleCurrentPage}></Nav>
      </header>
   )
}

export default Header