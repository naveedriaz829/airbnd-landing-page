import airbnb from './Assets/airbnb.png'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
      <div className="header">
        <div className="logo">
          <a href="index.html">
            <img src={airbnb} alt="airbnb" />
          </a>  
        </div>
        <div className="nav-links">
          <a href="#">Places to stay</a>
          <a href="#">Experiences</a>
          <a href="#">Online Experiences</a>
        </div>
        <div className="right-bar">
          <a href="#" className="host">Become a host</a>
          <a href="#" className="world"><i className="fa-solid fa-earth-europe"></i></a>
          <div className="double-icon">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-circle-user"></i>
          </div>
        </div>
      </div>
      <div className="input-container">
        <div className="input-text">
          <span>Location</span><br />
          <input placeholder="Where are you going?" type="text" />
        </div>
        <div className="input-text">
          <span>Check in</span><br />
          <input placeholder="Add dates" type="text" />
        </div>
        <div className="input-text">
          <span>Check out</span><br />
          <input placeholder="Add dates" type="text" />
        </div>
        <div className="input-text">
          <span>Guests</span><br />
          <input placeholder="Add guests" type="text" />
        </div>
        <div className="button-area">
          <a href="#">
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </a>
        </div>
      </div>
      <div className="main-area">
        <h1>Greatest Experiences Ahead</h1>
        <button>Explore Now</button>
      </div>
    </div>
    </>
  );
}

export default App;
