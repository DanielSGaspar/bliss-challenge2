import { useParams, useLocation } from "react-router-dom";
import { getQuestion } from "../../api/api";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./QuestionShow.css"

const QuestionShow = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState([]);
  const [choices, setChoices] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const location = useLocation();
  const bgColorClass = location.state?.bgColorClass || "bg-color-2";

  console.log('bgColorClass');
  console.log(bgColorClass);

  const fetchQuestion = async () => {
    const question = await getQuestion(id);
    setQuestion(question);
    setChoices(question.choices);

    const totalVotes = question.choices.reduce((sum, choice) => sum + choice.votes, 0);
    setTotalVotes(totalVotes);
  };


  useEffect(() => {
    fetchQuestion();
  }, []);

  console.log(question);
  console.log("hi");

  return (
    <div>
      <Navbar back={true}/>
      <div className="center-question">
        <div className={`question-show-container ${bgColorClass}`}>
          <div className="image-container">
            <img src={question.image_url} alt="question" />
          </div>
          <h1>{question.question}</h1>
          <ul>
            {choices.map((choice, index) => {
              const percentage = (choice.votes / totalVotes * 100)
              console.log("This is the percentage");
              console.log(percentage);
              return <li className="choice-list-show" key={index}>
                <div className="progress-container">
                  <div className="progress" style={{width: `${percentage}%`}}></div>
                </div>
                <div className="choice">
                  <h2>{choice.choice}</h2>
                  <h2>{choice.votes}votes</h2>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className="center-btn">
        <button className="share-btn-show">Share</button>
      </div>
    </div>
  )
};

export default QuestionShow;
