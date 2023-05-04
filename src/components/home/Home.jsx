import SearchForm from "../Questions/SearchForm/SearchFrom";
import './Home.css'

const Home = () => {

  return (
    <div className="home">
      <div className="home-container">
        <div className="content">
          <h1 className="logo">UniPolls</h1>
          <h2 className="subtitle">Find answers to all your questions!</h2>
          <SearchForm initialValue="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
