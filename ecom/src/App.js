import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='top'>
        <Navbar/>
        <div className='overlay-container'>
          <img src='/vint.png' className='women'/>
          <div className='overlay'>
            <div className='content'>WOMEN'S</div>
          </div>
      </div>
        </div>
     <div className='products'>
      <div className='filter'>
        <div className='subtypes'>
          <label className='browse'>
            <input placeholder='browse by...' className='inside-browse'/>
          </label>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
