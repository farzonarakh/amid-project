import Netflix from '../../assets/images/Netflix.png';
import Forbes from '../../assets/images/Forbes.png';
import Ite from '../../assets/images/ITE.png';
import Fedex from '../../assets/images/Fedex.png';
import Penguins from '../../assets/images/Penguins.png';
import Audiomack from '../../assets/images/Audiomack.png';
import Ellipse from '../../assets/images/Ellipse.png';
import Gotomeeting from '../../assets/images/Gotomeeting.png';
import './Brands.css';

export function Brands() {
  return (
      <div className="brands-section">
        <div className="brands-logos">
          <div className="logo">
            <img className="netflix-logo" src={Netflix} />
          </div>
          <div className="logo">
            <img className="forbes-logo" src={Forbes} />
          </div>
          <div className="logo">
            <img className="ite-logo" src={Ite} />
          </div>
          <div className="logo">
            <img className="fedex-logo" src={Fedex} />
          </div>
          <div className="logo">
            <img className="penguins-logo" src={Penguins} />
          </div>
          <div className="logo">
            <img className="audiomack-logo" src={Audiomack} />
          </div>
          <div className="logo">
            <img className="ellipse-logo" src={Ellipse} />
          </div>
          <div className="logo">
            <img className="gotomeeting-logo" src={Gotomeeting} />
          </div>
        </div>
      </div>
  )
}