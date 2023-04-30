import "./QuestionCard.css"

const Question = ({ question, bgColorClass }) => {

  const date = new Date(question.published_at);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDay();

  const displayDate = `${day}. ${month}`

  return (
    <div className={`question-container ${bgColorClass}`}>
      <div className="question-header">
        <h3>Question {question.id}</h3>
        <h4>{displayDate}</h4>
      </div>
      <div className="question-text">
        <h1>{question.question}</h1>
      </div>
      <div className="choice-container">
        {question.choices.map((choice) => {
          return (
            <div className="choice-list">
              <h2>{choice.choice}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )

};

export default Question;
