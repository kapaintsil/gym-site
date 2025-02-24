import './Programs.css';
import programsData from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png'

function Programs() {
  return (
    <div className='programs' id='programs'>
      <div className="program-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      
      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            <img src={program.image} alt="program-image" />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>
                Join Now
              </span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;