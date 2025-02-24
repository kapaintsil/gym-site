import './Header.css'
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { useState } from 'react';

function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <Link
        
        to='hero'
        activeClass='active'
        span={true}
        smooth={true}
      ><img src={logo} alt="website-logo" className='logo' /></Link>
      
      {
      (menuOpened === false && mobile === true) ? 
          <div
            style={{
              background: 'var(--appColor)',
              padding: '0.5rem',
              borderRadius: '5px'
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img src={bars} alt="menu-icon" style={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }} /></div> :
          <ul className='header-menu'>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to='hero'
                activeClass='active'
                span={true}
                smooth={true}
              >Home</Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to='programs'
                span={true}
                smooth={true}
              >Programs</Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to='reasons'
                span={true}
                smooth={true}
              >Why Us</Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to='plans'
                span={true}
                smooth={true}
              >Plans</Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to='testimonials'
                span={true}
                smooth={true}
              >Testimonials</Link>
            </li>
        </ul>
    }
    </div>
  )
}

export default Header;