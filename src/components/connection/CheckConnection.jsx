import { Detector } from "react-detect-offline";

const CheckConnection = props => {
  return(
    <>
      <Detector
        render={({ online }) => (
          online ? props.children:
          <div>
            <h1>No Connectioin</h1>
            <h4>Please check your internet connection...</h4>
          </div>
        )}
      />
    </>
  );

}

export default CheckConnection;


// This component is not being used !
