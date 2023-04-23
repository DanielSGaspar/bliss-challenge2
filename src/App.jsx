import './App.css';
import { checkHealth } from './api/api';
import LoadingScreen from './components/loading/LoadingScreen';
import RetryLoad from './components/loading/RetryLoad';
import { useState, useEffect, useCallback } from 'react';
import ApiContext from './api/ApiContext';
import SearchForm from './components/questions/SearchFrom';
import { useNavigate } from 'react-router-dom';
import CheckConnection from './components/connection/CheckConnection';

console.log("Rendered App");

function App() {

  const [loading, setLoading] = useState(false)
  const [apiHealthy, setApiHealthy] = useState(false)
  const navigate = useNavigate();

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
    <CheckConnection>
      <ApiContext.Provider value={{ apiHealthy, setApiHealthy, checkApi }}>
        {loading? (
          <LoadingScreen />
        ) : apiHealthy ? (
          <div>
            <h1>Welcome to United Polls</h1>
            <h2>Search for your question:</h2>
            <SearchForm initialValue="" />
          </div>
        ) : (
          <RetryLoad checkApi={checkApi} />
        )}
      </ApiContext.Provider>
    </CheckConnection>

  );
}

export default App;
