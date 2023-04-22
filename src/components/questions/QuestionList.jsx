import { getQuestions } from "../../api/api";
import SearchForm from "./SearchFrom";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";

const QuestionList = () => {
  console.log("Rendered Question List");

  const [questions, setQuestions] = useState([]);
  const [searchParams] = useSearchParams();
  const [offset, setOffset] = useState(0)
  const searchValue = searchParams.get("filter");
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    const newQuestions = await getQuestions(10, offset, searchValue);
    setQuestions((prevQuestions) => [...prevQuestions, ...newQuestions])
  };

  const handleLoadClick = () => {
    setOffset((prevOffset) => prevOffset + 10)
    fetchQuestions();
  };

  const handleQuestionClick = (questionId) => {
    navigate(`/questions/${questionId}`)
  };

  const handleDismissClick = () => {
    const filter = "";
    setQuestions([]);
    navigate({
      pathname: "/questions",
      search: `?${createSearchParams({ filter })}`
    })
  };

  useEffect(() => {
    setQuestions([]);
    fetchQuestions();
  }, [searchValue]);


  return (
    <div>
      <h1>Your Questions</h1>
      <SearchForm initialValue={searchValue} />
      <ul>
        {questions.map((question) => {
          return (
            <li
              key={question.id}
              onClick={() => handleQuestionClick(question.id)}
            >
              {question.question}
            </li>
          )
        })}
      </ul>
      <button onClick={handleLoadClick}>Load more</button>
      <button onClick={handleDismissClick}>Dismiss</button>
    </div>
  )
};

export default QuestionList;
