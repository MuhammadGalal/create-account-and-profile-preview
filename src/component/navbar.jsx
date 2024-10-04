import { Link } from 'react-router-dom';
import MainPageIcon from '../assets/mainPage';
import SettingIcon from '../assets/settings';
export default function Navbar () {
    return (
        <>
        <nav>
        <ul>
          <li>
            <Link to="/"> <MainPageIcon />   القائمة الرئيسية  </Link>
          </li>
          <li>
            <Link to="/about"> <SettingIcon /> الطلاب  </Link>
          </li>
          <li>
            <Link to="/about"> <SettingIcon /> المعلمين  </Link>
          </li>
          <li>
            <Link to="/about"> <SettingIcon /> الموظفون  </Link>
          </li>
        </ul>
      </nav>
        
        </>
    )
}