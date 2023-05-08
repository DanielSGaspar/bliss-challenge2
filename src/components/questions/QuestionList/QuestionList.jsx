import { getQuestions } from "../../../api/api";
import SearchForm from "../SearchForm/SearchFrom";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import QuestionCard from "../QuestionCard/QuestionCard"
import "./QuestionList.css"
import ShareScreen from "../../ShareScreen/ShareScreen";

const QuestionList = () => {
  console.log("Rendered Question List");

  const [questions, setQuestions] = useState([]);
  const [searchParams] = useSearchParams();
  const [offset, setOffset] = useState(0);
  const [openShare, setOpenShare] = useState(false);
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
    setOffset(0);
    navigate({
      pathname: "/questions",
      search: `?${createSearchParams({ filter })}`
    })
  };

  const handleShareClick = () => {
    setOpenShare(true)
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
      <div className="center-btn btn-margin">
        <button className="btn" onClick={handleLoadClick}>Load more</button>
      </div>
      <button className="round-btn dismiss-position" onClick={handleDismissClick}>
        <div className="center-btn">
          <i className="fa-solid fa-x"></i>
        </div>
      </button>
      <button className="round-btn share-position" onClick={handleShareClick}>
        <div className="center-btn">
          <i className="fa-solid fa-share"></i>
        </div>
      </button>
      {openShare && <ShareScreen closeModal={setOpenShare}/>}
    </div>
  )
};

export default QuestionList;
