import './App.css';
import { checkHealth } from './api/api';
import LoadingScreen from './Components/Loading/LoadingScreen';
import RetryLoad from './Components/Loading/RetryLoad';
import { useState, useEffect, useCallback } from 'react';
import ApiContext from './api/ApiContext';
import Home from './Components/Home/Home';

console.log("Rendered App");

function App() {

  const [loading, setLoading] = useState(false)
  const [apiHealthy, setApiHealthy] = useState(false)

  const checkApi = useCallback(async () =>{
    setLoading(true);
    const apiStatus = await checkHealth();
    setApiHealthy(apiStatus);
    setLoading(false)
  }, []);

  useEffect(() => {
    checkApi();
  }, [checkApi]);

  return (

    <ApiContext.Provider value={{ apiHealthy, setApiHealthy, checkApi }}>
      {loading? (
        <LoadingScreen />
      ) : apiHealthy ? (
        <Home />
      ) : (
        <RetryLoad checkApi={checkApi} />
      )}
    </ApiContext.Provider>

  );
}

export default App;
