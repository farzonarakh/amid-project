import './Footer.css';
import Logo from '../../assets/images/logo.png';
import Logo1 from '../../assets/images/logo1.png';
import Logo2 from '../../assets/images/logo2.png';
import Logo3 from '../../assets/images/logo3.png';
import Logo4 from '../../assets/images/logo4.png';
import Logo5 from '../../assets/images/logo5.png';

export function Footer() {
  return (
    <div className="footer">
      <div className="heading-bold">
        Subscribe To Our Newsletter Get The Best Offers
      </div>
      <div className="subscribe-row">
        <div className="one-click">
          With One Click
        </div>
        <button className='subscribe-button'>
          Subscribe
            <span className="arrow-right">
            </span>
        </button>
      </div>
      <div className="main-row">
        <div className="logo-container">
          <img src={Logo} />
          <p className='company-type'>
            business consultancy agency
          </p>
        </div>
        <div className='info-options'>
          <div className='about'>About</div>
          <div className='terms'>Terms</div>
          <div className='blogs'>Blogs</div>
          <div className='contact'>Contact</div>
        </div>
        <div className='contact-details'>
          <div className='phone-number'>
            +998 1276 234
          </div>
          <div className='address'>
            82/93 Boeind Street. NY
          </div>
          <div className='email'>
            info@amid.mail.com
          </div>
        </div>
      </div>
      <div className='bottom-row'>
          <div className='footer-copyright'>
            All Rights Reserved @Debzui2020
          </div>
          <div className='profiles'>
            <img src={Logo1}/>
            <img src={Logo2}/>
            <img src={Logo3}/>
            <img src={Logo4}/>
            <img src={Logo5}/>
          </div>
        </div>
    </div>
  );
}