import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='overlay-light'>
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
          <div className='categories'>
            <h1>Women's</h1>
            <div className='sub-categories'>
              <ul className='item-container'>
                <li className='cat-item-holder'><a className='category-item'href="">Category-2</a></li>
                <li className='cat-item-holder'><a className='category-item' href="">Category-3</a></li>
                <li className='cat-item-holder'><a className='category-item' href="">Category-4</a></li>
                <li className='cat-item-holder'><a className='category-item'href="">Category-5</a></li>
                <li className='cat-item-holder'><a className='category-item' href="">Category-1</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
     </div>
    </div>
    </div>
  );
}

export default App;
