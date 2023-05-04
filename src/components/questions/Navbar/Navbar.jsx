import "./Navbar.css"
import { useNavigate } from "react-router-dom";



const Navbar = ({ back }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="navbar">
      {back ? (
        <button className="back-btn" onClick={handleBackClick}>
          <div className="center-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </button>
      ) : null}
      <h1 className="navbar-logo">UniPoll</h1>
    </div>
  );
};

export default Navbar;
