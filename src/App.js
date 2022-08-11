import React, {useState} from 'react';
import StartPage from './components/StartPage';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  const [showStartPage , setShowStartPage] = useState(true);
  const [currentPage, setCurrentPage] = useState('About');
   const handleCurrentPage = (page) => {
      setCurrentPage(page);
   }

  return (
    <>
      {showStartPage ? (
      <main className={showStartPage && 'startPageBg'}>
        <StartPage 
        showStartPage={showStartPage} setShowStartPage={setShowStartPage}>
        </StartPage>
      </main>
    ) : (
      <main>
        <Header currentPage={currentPage} handleCurrentPage={handleCurrentPage}></Header>
        <Project currentPage={currentPage} handleCurrentPage={handleCurrentPage}></Project>
      </main>
    )}
  </>
    
    
  );
}

export default App;
