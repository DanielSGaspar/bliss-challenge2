import "./RetryLoad.css"

const RetryLoad = ({ checkApi }) => {
  const handleClick = () => {
    checkApi()
  };

  return (
    <div className="loading-container">
      <div className="loader">
        <div className="reload-icon">
          <i className="fa-solid fa-heart-crack"></i>
        </div>
        <div className="reload-txt">
          <h2>Service unavailable</h2>
        </div>
        <div>
          <button className="reload-btn" onClick={handleClick}>Reload</button>
        </div>
      </div>
    </div>
  );
};

export default RetryLoad;
