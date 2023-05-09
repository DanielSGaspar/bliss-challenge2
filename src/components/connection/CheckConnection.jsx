import "./CheckConnection.css";
import noWifi from "../../Images/noWifi.png"

const CheckConnection = () => {
  return(
    <div className="check-connection-container">
      <div>
        <div className="">
          <img src={noWifi} alt="no connection" className="connection-icon" />
        </div>
        <h1>OOOPS..</h1>
        <h2>No Internet connection was found. Check your connection or try again.</h2>
        <button onClick={() => window.location.reload()} className="btn">Retry</button>
      </div>
    </div>
  );

}

export default CheckConnection;


// This component is not being used !
