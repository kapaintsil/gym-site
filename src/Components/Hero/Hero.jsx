import Header from '../Header/Header';
import './Hero.css'
import { motion } from "framer-motion";
import CountUp from 'react-countup';

// imported images 
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from  '../../assets/heart.png';
import calories from  '../../assets/calories.png';

function Hero() {

  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero">

      <div className='blur hero-blur'></div>

      {/* left side of the hero section */}
      <div className='left-h'>
        <Header />
        
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "150px" : "238px"}}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween', duration: 3}}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and live up your life to the fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <CountUp style={{fontWeight: 'bold', color:'white'}} start={100} end={140} delay={0.5} duration={2} prefix='+'/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <CountUp style={{fontWeight: 'bold', color:'white'}} start={700} end={798} delay={0.5} duration={2} prefix='+'/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <CountUp style={{fontWeight: 'bold', color:'white'}} start={0} end={50} delay={0.5} duration={2} prefix='+'/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>

      {/* right side of the hero section */}
      <div className='right-h'>
        <button className='btn'>join now</button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={{ ...transition, type: 'tween', duration: 3}}
          className="heart-rate">
          <img src={heart} alt="heart image" />
          <span>heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="hero-image" className='hero-image'/>
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem'  }}
          transition={{ ...transition, type: 'tween', duration: 3}}
          src={hero_image_back}
          alt="hero-image_back"
          className='hero-image-back'
        />

        {/* calories div */}
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={{ ...transition, type: 'tween', duration: 3}}
          className="calories">
          <img src={calories}
            alt="calories-image"
            className='calories-image' />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;