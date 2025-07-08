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
          <div className='browse'>
           <label>
            <input placeholder='browse by'/>
           </label>
          </div>
          <div className='cloth-section'>
            <div className='filter'></div>
            <div className='clothes'>
            {/* keep as grids */}
            </div>
          </div>
         </div>
    </div>
  );
}

export default App;
