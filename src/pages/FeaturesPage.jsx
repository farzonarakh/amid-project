import './FeaturesPage.css';
import SupportIcon from '../assets/images/support-icon.png';
import CommunityIcon from '../assets/images/community-icon.png';
import PlanIcon from '../assets/images/plan-icon.png';
import { Header } from '../components/Header';

export function FeaturesPage() {
  return (
    <>
      <Header />
      <div className="features-page">
        <div className="services-heading">services</div>
        <div className="subheading-section">
          <div className="subheading-bold">
            Exactly Everything You
            Need For Business
          </div>
          <div className="subheading-light">
            We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan
          </div>
        </div>
        <div className="features-section">
          <div className="support-feature-box">
            <div className="feature-icon-container">
              <img className="support-icon" src={SupportIcon} />
            </div>
            <div className="feature-title">
              Business Growing Support
            </div>
            <div className="feature-description">
              Get every necessary support to grow as
              business startup
            </div>
            <div className="learn-more">
              Learn More <span className='arrow-circle'><span className='arrow-right'></span></span>
            </div>
          </div>
          <div className="community-feature-box">
            <div className="feature-icon-container">
              <img className="community-icon" src={CommunityIcon} />
            </div>
            <div className="feature-title">
              Community Attachment
            </div>
            <div className="feature-description">
              A lifetime attachment with the community dreamer
            </div>
            <div className="learn-more">
              Learn More <span className='arrow-circle'><span className='arrow-right'></span></span>
            </div>
          </div>
          <div className="plan-feature-box">
            <div className="feature-icon-container">
              <img className="plan-icon" src={PlanIcon} />
            </div>
            <div className="feature-title">
              Exceptional Discovery Plans
            </div>
            <div className="feature-description">
              An exceptional plan can take you ahead millions of step which we discove
            </div>
            <div className="learn-more">
              Learn More <span className='arrow-circle'><span className='arrow-right'></span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}