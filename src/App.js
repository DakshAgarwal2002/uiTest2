import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VerticalScrollBar from './components/VerticalScrollBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='mainSection'>
      <VerticalScrollBar/>
      <HeroSection/>
      </div>
      
    </div>
  );
}

export default App;
