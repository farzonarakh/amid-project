import './ReviewsPage.css';
import Blog1 from '../assets/images/blog1.png';
import ArrowRight from '../assets/images/arrow-right.png'
import Blog2 from '../assets/images/blog2.png';
import ArrowLeft from '../assets/images/arrow-left.png';
import { Header } from '../components/Header';

export function ReviewsPage() {
  return (
    <>
      <Header />
      <div className="reviews-page">
        <div className="heading-container">
          <div className="heading">
            blog
          </div>
          <div className="subheading-bold">
            We Publish Blogs Every Week
          </div>
          <div className="subheading-light">
            We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan
          </div>
        </div>
        <div className='arrows'>
          <img className='arrow' src={ArrowLeft} />
          <img className='arrow' src={ArrowRight} />
        </div>
        <div className="blog-container">
          <div className="blog">
            <img src={Blog1} />
            <div className='blog-date'>22 Dec</div>
            <div className='blog-heading'>
              Upgrowing Economy Needs More  Startups
            </div>
            <div className='blog-subheading'>
              We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan
            </div>
            <div className='learn-more'>
              Learn More
              <span className='arrow-circle'>
                <span className='arrow-right'>
                </span>
              </span>
            </div>
          </div>
          <div className="blog">
            <img src={Blog2} />
            <div className='blog-date'>16 Dec</div>
            <div className='blog-heading'>
              Team Has Some Unique Feature - What Yours?
            </div>
            <div className='blog-subheading'>
              We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan
            </div>
            <div className='learn-more'>
              Learn More
              <span className='arrow-circle'>
                <span className='arrow-right'>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}