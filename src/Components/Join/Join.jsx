import { useRef } from 'react';
import './Join.css'
import emailjs from '@emailjs/browser';

function Join() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zsrukms', 'template_c5f08w4', form.current, {
        publicKey: 'XbQpFRpVqp2nvYD3n',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='join' id='join'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke-text'> with us?</span>
        </div>
      </div>

      <div className='right-j'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Enter full name'/>
          <input type="email" name="user_email" placeholder='Enter email address'/>
          <textarea name="message"  placeholder='Enter message'/>
          <button className='btn'>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;