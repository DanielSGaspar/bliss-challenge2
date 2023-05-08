import './ShareScreen.css'
import { share } from '../../api/api';
import { useState, useRef, useEffect } from 'react';

const ShareScreen = ({ closeModal }) => {
  const [emailInput, setEmailInput] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailInput;
    const url = window.location.href;
    try {
      await share(email, url);
      setSuccessMessage("Successfully shared!");
      setIsSubmitted(true);
      setTimeout(() => {
        closeModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error sharing the URL:", error);
      setSuccessMessage("Failed to share. Please try again.");
    }
  };

  return (
    <div className='share-background'>
      <div className='share-container'>
        {!isSubmitted ? (
          <form action='' className='share-form' onSubmit={handleSubmit}>
          <h1 className='share-title'>Share with a friend</h1>
          {successMessage && <p style={{color: 'white'}}className='success-message'>{successMessage}</p>}
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
              <button className='btn' type='button' onClick={handleCancelClick}>Cancel</button>
              <button className='btn' type='submit'>Share</button>
            </div>
          </div>
        </form>
        ) : (
          <div className='success-container'>
            <h1 className='share-title'>{successMessage}</h1>
          </div>
        )}

      </div>
    </div>
  )
};

export default ShareScreen;
