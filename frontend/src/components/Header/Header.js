import './Header.css';
import Search from '../../Icons/search.png';
import Setting from '../../Icons/setting.png';
import User from '../../Icons/user.png';
export default function Header() {
  return (
    <header>
    <div className='logo'>
          To-do    
    </div>
    <div className="search-bar">
       <img src={Search} alt="search icon" />
       <input/>
    </div>
    <div className="user-bar">
        <img src={Setting} alt="setting icon" />
        <div>
            <img src={User} alt='User'/>
        </div>
    </div>

    </header>
  );
}