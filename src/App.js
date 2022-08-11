import React, {useState} from 'react';
import StartPage from './components/StartPage';
import Header from './components/Header';

function App() {
  const [showStartPage , setShowStartPage] = useState(true);

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
        <Header></Header>
      </main>
    )}
  </>
    
    
  );
}

export default App;
