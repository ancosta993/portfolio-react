import React, {useState} from 'react';
import StartPage from './components/StartPage';
import Header from './components/Header';

function App() {
  const [showStartPage , setShowStartPage] = useState(true);

  return (
    <main className = {showStartPage && 'startPageBg'}>
      {showStartPage ? (
        <StartPage 
        showStartPage={showStartPage}setShowStartPage={setShowStartPage}></StartPage>
      ) : (
        <Header></Header>
      )}
    </main>
    
  );
}

export default App;
