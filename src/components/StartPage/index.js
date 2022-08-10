import React from 'react';

function StartPage({showStartPage, setShowStartPage}) {
   const renderPortfolio = (showStartPage) =>{
      setShowStartPage(!showStartPage)
   }
   return (
      <div className = 'startPageContainer'>
         <h1 className='startPageTitle'>Hi! Welcome To My Portfolio</h1>
         <button className='btn startPageBtn' onClick={() => {renderPortfolio(showStartPage)}}> Get Started </button>
      </div>
   )
};

export default StartPage
