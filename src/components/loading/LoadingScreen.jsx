import { MoonLoader } from "react-spinners";
import "./LoadingScreen.css"

const LoadingScreen = ({ loading }) => {
  return (
    <div className="loading-container">
      <div className="loader">
        <MoonLoader
            color='#D06B50'
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h2>Loading...</h2>
      </div>
    </div>
  )
}

export default LoadingScreen;
