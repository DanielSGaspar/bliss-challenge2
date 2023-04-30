import { useState, useRef, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import "./SearchForm.css"

const SearchForm = ({ initialValue }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(initialValue)
  const inputRef = useRef();

  const handleFilterChange = (event) => {
    const value = event.target.value
    setFilter(value.toLowerCase())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inputRef.current.blur();

    navigate({
      pathname: "/questions",
      search: `?${createSearchParams({ filter })}`
    })
  };

  useEffect(() => {
    const whiteSpaceRegExp = /\s+/;

    if (!filter || whiteSpaceRegExp.test(filter)) {
      inputRef.current.focus();
    }
  }, [filter]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box">
        <input className="input" type="text" value={filter} onChange={handleFilterChange} ref={inputRef}/>
        <button className="submit-btn" type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
