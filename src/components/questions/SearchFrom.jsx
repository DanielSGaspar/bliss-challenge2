import { useState, useRef, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchForm = ({ initialValue }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(initialValue)
  const inputRef = useRef();

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
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
      <input type="text" value={filter} onChange={handleFilterChange} ref={inputRef}/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
