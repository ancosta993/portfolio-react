import React from 'react';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';
import Resume from '../pages/Resume';

function Project({currentPage, handleCurrentPage}){
   const renderPage = () => {
      if (currentPage === 'About') {
         return <About />
      } else if (currentPage === 'Project') {
         return <Projects />
      } else if (currentPage === 'Contacts') {
         return <Contacts />
      } else {
         return <Resume />
      }
   }

   return(
      <>
         {renderPage()}
      </>
   )
}

export default Project