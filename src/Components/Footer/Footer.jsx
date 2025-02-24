import './Footer.css';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png'; 
import X from '../../assets/X.png'; 
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className='footer' >
      <hr />
      <footer>
        <div className='social-links'>
          <a href="">
            <img src={github} alt="github-icon" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram-icon" />
          </a>
          <a href="">
            <img src={linkedin} alt="linkedin-icon" />
          </a>
        </div>
        <div className='logo'>
          <img src={logo} alt="logo-icon" />
        </div>
      </footer>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>

      <div className='developer'>
        <span>Developed by: Kwame Adonoo Paintsil</span>
        <div>
          <a href="https://github.com/kapaintsil" target='_blank' rel="noopener noreferrer">
            <img src={github} alt="github-icon" />
          </a>
          <a href="https://x.com/KwameAdonoo" target='_blank' rel="noopener noreferrer">
            <img src={X} alt="X-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;