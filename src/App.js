import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
