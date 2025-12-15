import { FaSearch } from 'react-icons/fa';
import "../styles/Searchbar.css";
const SearchBar = () => {
  return (
    <div className='search-bar'>
      
      <button><FaSearch /></button>
      <input type="text" placeholder="Search movies..." />
    </div>
  );
};

export default SearchBar;