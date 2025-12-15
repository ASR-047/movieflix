import LogoutButton from "../components/common/LogoutButton";
import LOGO from "../assets/MoveFlix-LOGO.png";
import "../styles/HeaderStyle.css";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="main-container">
      <h1 className="header-title">Movie Flix</h1>

      
        <img className="header-logo" src={LOGO} alt="Movie Flix Logo" />
     
      <SearchBar />

      <div className="logout-button-container">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
