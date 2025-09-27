import Dots from '../../assets/images/dots.png';
import Pleased from '../../assets/images/pleased.png';
import Circle from '../../assets/images/Circle.png';
import Icons from '../../assets/images/icons 4.png';
import './Hero.css';

export function Hero() {
  return (
    <div className="hero-page">
      <div className="hero-text-container">
        <p className="it-works">it works!</p>
        <p className="try-business-ideas">
          Try Our Business
          Ideas to grow
          Rapidly
        </p>
        <p className="we-understand">
          We understand how desperatly you want to grow in the business world & our motto is to help you with practicale
          idea and plan
        </p>
        <div className="start-video-container">
          <button className="get-started-button">
            Get Started</button>
          <button className="video-button">
            <div className="video-play"></div>
          </button>
          <p className="demo-video">DEMO VIDEO</p>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={Dots} className="dots-image" />
        <img src={Pleased} className="pleased-image" />
        <img src={Circle} className="circle-image" />
        <img src={Icons} className="icons-image" />
      </div>
    </div>
  );
}