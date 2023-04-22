const RetryLoad = ({ checkApi }) => {
  const handleClick = () => {
    checkApi()
  };

  return (
    <div>
      <h1>Service unavailable.</h1>
      <button onClick={handleClick}>Reload</button>
    </div>
  );
};

export default RetryLoad;
