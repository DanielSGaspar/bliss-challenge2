import "./CheckConnection.css"

const CheckConnection = () => {
  return(
    <div className="check-connection-container">
      <div>
        <div className="connection-icon">
          <i class="fa-solid fa-cloud"></i>
        </div>
        <h1>It seems like you are offline. Please check your connection...</h1>
      </div>
    </div>
  );

}

export default CheckConnection;


// This component is not being used !
