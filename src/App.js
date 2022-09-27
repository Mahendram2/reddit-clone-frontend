import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='body-container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main'>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
