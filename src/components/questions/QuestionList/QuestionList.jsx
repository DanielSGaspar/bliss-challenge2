import { getQuestions } from "../../../api/api";
import SearchForm from "../SearchForm/SearchFrom";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import QuestionCard from "../QuestionCard/QuestionCard"
import "../QuestionList/QuestionList.css"

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

  const handleQuestionClick = (questionId, bgColorClass) => {
    navigate(`/questions/${questionId}`, { state: { bgColorClass }})
  };

  const handleDismissClick = () => {
    const filter = "";
    setQuestions([]);
    navigate({
      pathname: "/questions",
      search: `?${createSearchParams({ filter })}`
    })
  };

  const handleShareClick = () => {

  };

  useEffect(() => {
    setQuestions([]);
    fetchQuestions();
  }, [searchValue]);


  return (
    <div className="list-container">
      <Navbar />
      <SearchForm initialValue={searchValue} />
      <ul>
        {questions.map((question, index) => {
          // determine bg color
          const bgColorClass = `bg-color-${index % 3 +1}`

          return (
            <li
              key={question.id}
              onClick={() => handleQuestionClick(question.id, bgColorClass)}
            >
              <QuestionCard question={question} bgColorClass={bgColorClass}/>
            </li>
          )
        })}
      </ul>
      <div className="load-btn-container">
        <button className="load-btn" onClick={handleLoadClick}>Load more</button>
      </div>
      <button className="dismiss-btn" onClick={handleDismissClick}>
        <div className="center-btn">
          <i class="fa-solid fa-x"></i>
        </div>
      </button>
      <button className="share-btn" onClick={handleShareClick}>
        <div className="center-btn">
          <i class="fa-solid fa-share"></i>
        </div>
      </button>
    </div>
  )
};

export default QuestionList;
