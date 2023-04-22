import { useParams, useNavigate } from "react-router-dom";
import { getQuestion } from "../../api/api";
import { useState, useEffect } from "react";

const QuestionShow = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState([])
  const [choices, setChoices] = useState([])
  const navigate = useNavigate();

  const fetchQuestion = async () => {
    const question = await getQuestion(id);
    setQuestion(question);
    setChoices(question.choices)
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  console.log(question);
  console.log("hi");

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>This is the Question nr. {id}</h1>
      <img src={question.image_url} alt="question" />
      <p>{question.question}</p>
      <ul>
        {choices.map((choice, index) => {
          return <li key={index}>
            {choice.choice} - {choice.votes}votes
          </li>
        })}
      </ul>
    </div>
  )
};

export default QuestionShow;
