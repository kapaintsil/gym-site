import './Reasons.css'

import newBalance from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';

function Reasons() {
  return (
    <div className='reasons' id="reasons">
      <div className='left-r'>
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
      </div>
      <div className='right-r'>

        <div>
          <span className='stroke-text'>why</span>
          <span> choose us</span>
        </div>

        {/* details on why choose us */}
        <div className='details-r'>
          <div>
            <img src={tick} alt="tick-icon" />
            <span>over 140 expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="tick-icon" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="tick-icon" />
            <span>1 free program for new members</span>
          </div>
          <div>
            <img src={tick} alt="tick-icon" />
            <span>reliable partners</span>
          </div>
        </div>

        {/* our partners */}
        <span className='our-partners'>
          our partners
        </span>
        <div className='partners'>
          <img src={newBalance} alt="new-balance-logo" />
          <img src={nike} alt="nike-logo" />
          <img src={adidas} alt="adidas-log" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;