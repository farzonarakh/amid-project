import './PortfolioPage.css';
import JobHub from '../assets/images/JobHub.png';
import Cent from '../assets/images/Cent.png';
import ArrowWhite from '../assets/images/arrow-white.png';
import { Header } from '../components/Header';

export function PortfolioPage() {
  return (
    <>
    <Header />
    <div className="portfolio-page">
      <div className="left-section">
        <div className="achievements-heading">
          achievements
        </div>
        <div className="subheading">
          We Worked With
          <span className='orange-number'>100+</span> Company Over
          <span className='orange-number'>10</span> Years
        </div>
        <div className='website-container'>
          <img className='website-img' src={JobHub} />
          <div className='website-title'>
            JobHub Job Finding Website
          </div>
          <div className='website-description'>
            This website has become one of the best ux interface  for users with an beautiful ui and also lucrative fot upcoming startups in the sectors
          </div>
        </div>
        <button className='view-more-button'>
          View More Work <img className='arrow-white' src={ArrowWhite} />
        </button>
      </div>
      <div className="right-section">
        <div className='stats-container'>
          <div className='stat-numbers'>
            <div className='stat-number'>9k+</div>
            <div className='stat-number'>924k+</div>
            <div className='stat-number'>416</div>
            <div className='stat-number'>3024</div>
          </div>
          <div className='stat-labels'>
            <div className='stat-label'>
              Completed Full Projects
            </div>
            <div className='stat-label'>
              Satisfiingly Happy Clients
            </div>
            <div className='stat-label'>
              Expertised  Unit Employees
            </div>
            <div className='stat-label'>
              Startups Case Studies
            </div>
          </div>
          <div className='stat-places'>
            <div className='stat-place'>
              From 789+ Companies
            </div>
            <div className='stat-place'>
              From 100+ Countries
            </div>
            <div className='stat-place'>
              From 20+ Countries
            </div>
            <div className='stat-place'>
              From 100+ Countries
            </div>
          </div>
        </div>
        <div className='website-container'>
          <img className='website-img' src={Cent} />
          <div className='website-title'>
            CENT - Payment App Landing Website
          </div>
          <div className='website-description'>
            This website has become one of the best ux interface  for users with an beautiful ui and also lucrative fot upcoming startups in the sectors
          </div>
        </div>
      </div>
    </div>
    </>
  )
}