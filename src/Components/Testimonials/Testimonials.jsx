import { useState } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';
import testimonialsData from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

function Testimonials() {

  const transition = {type: 'spring', duration: 3};

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const leftArrowClick = () => {
    selected === 0 ? setSelected(tLength - 1) :
      setSelected((prev => prev - 1));
  }

  const rightArrowClick = () => {
    selected === tLength - 1 ? setSelected(0) :
      setSelected((prev => prev + 1));
  }

  return (
    <div className='testimonials' id='testimonials'>
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>what they say</span>
        <span> about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{...transition, duration: 2}}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span>
            {testimonialsData[selected].name}
          </span> {" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className='right-t'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{...transition, duration: 2}}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{...transition, duration: 2}}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{...transition, duration: 2}}
          src={testimonialsData[selected].image} alt="reviewer-image" />

        <div className='arrows'>
          <img
            onClick={leftArrowClick}
            src={leftArrow} alt="left-arrow-icon"
          />
          <img
            onClick={rightArrowClick}
            src={rightArrow} alt="right-arrow-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;