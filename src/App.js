import { useState, useEffect } from 'react';
import { auth } from './firebase';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userObjOrNull) => {
      setUser(userObjOrNull)
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className='App'>
      <Header user={user} />
      <div className='body-container'>
        <div className='sidebar'>
          <Sidebar user={user} />
        </div>
        <div className='main'>
          <Main user={user} />
        </div>
      </div>
    </div>
  );
}

export default App;
