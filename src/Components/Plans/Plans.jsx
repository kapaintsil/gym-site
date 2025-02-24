import './Plans.css'
import plansData from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'

function Plans() {
  return (
    <div className='plans' id='plans'>

      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>

      <div className='plans-header'>
        <span className='stroke-text'>make a plan</span>
        <span>start your journey</span>
        <span className='stroke-text'>with us</span>
      </div>

      {/* plans card */}
      <div className='plan-cards'>
        {plansData.map((plan, index) => (
          <div className="card" key={index}>
            <img src={plan.icon} alt="plan-icon" />
            <span>{plan.name}</span>
            <span>GH₵{plan.price}</span>

            {/* features */}
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="white-tick-icon" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>see more benefits -&gt;</span>
            </div>
            <button className='btn'>join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;