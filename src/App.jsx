import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Join from './Components/Join/join.jsx';
import Plans from './Components/Plans/Plans.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Reasons from './Components/Reasons/Reasons.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';

function App() {

  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
