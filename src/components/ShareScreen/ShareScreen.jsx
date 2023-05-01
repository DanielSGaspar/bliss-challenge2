import './ShareScreen.css'
import { share } from '../../api/api';
import { useState } from 'react';

const ShareScreen = ({ closeModal }) => {
  const [emailInput, setEmailInput] = useState("")

  const handleCancelClick = () => {
    closeModal(false)
  };

  const handleChange = (event) => {
    const value = event.target.value
    setEmailInput(value.toLowerCase())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailInput;
    const url = window.location.href;
    console.log(url);
    console.log(email);
    share(email, url);
    closeModal(false);
  };

  return (
    <div className="share-background">
      <div className="share-container">
        <form action="" className='share-form' onSubmit={handleSubmit}>
          <h1>Share with a friend</h1>
          <div>
            <input type="text" className='email-input' placeholder='Email' value={emailInput} onChange={handleChange}/>
            <div className="share-btn-container">
              <button className="load-btn" onClick={handleCancelClick}>Cancel</button>
              <button className="load-btn" type="submit">Share</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default ShareScreen;
