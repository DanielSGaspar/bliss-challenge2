import './ShareScreen.css'
import { share } from '../../api/api';
import { useState, useRef, useEffect } from 'react';

const ShareScreen = ({ closeModal }) => {
  const [emailInput, setEmailInput] = useState("")
  const shareRef = useRef();

  useEffect(() => {
    shareRef.current.focus()
  }, [])

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
    <div className='share-background'>
      <div className='share-container'>
        <form action='' className='share-form' onSubmit={handleSubmit}>
          <h1 className='share-title'>Share with a friend</h1>
          <div>
            <input
              type='text'
              className='email-input'
              placeholder='Email'
              value={emailInput}
              onChange={handleChange}
              ref={shareRef}
            />
            <div className='share-btn-container'>
              <button className='btn' onClick={handleCancelClick}>Cancel</button>
              <button className='btn' type='submit'>Share</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default ShareScreen;
