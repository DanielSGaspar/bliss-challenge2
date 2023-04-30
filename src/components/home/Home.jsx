import SearchForm from "../questions/SearchForm/SearchFrom";
import './Home.css'

const Home = () => {

  return (
    <div className="home">
      <div className="home-container">
        <div className="content">
          <h1>UniPolls</h1>
          <h2>Find answers to all your questions!</h2>
          <SearchForm initialValue="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
