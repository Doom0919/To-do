
import './App.css';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/Sidebar';
function App() {
  return (
    <div className="App">
         <div className='header'><Header /></div>
            <div className="main">
              <div className='sidebar'>
                <Sidebar />
              </div>
              <div className='content'>Content </div>
            </div>
    </div>
  );
}

export default App;
