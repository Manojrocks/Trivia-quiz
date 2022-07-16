import { useEffect, useState } from "react"
import data from '../Data'
import useSound from 'use-sound';
import correct from '../sounds/correct'
import wrong from '../sounds/wrong'

const Trivia = ({
  data,questionNumber,setQuestionNumber,
  setTimeOut
}) => {
  const [question,setQuestion]=useState(null);
  const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [className,setClassName]=useState("answer");
  const [correctAnswer] =useSound(correct);
  const [wrongAnswer]= useSound(wrong);

  // UseEffect hook
   useEffect(() =>{
   setQuestion(data[questionNumber -1]);
   },[data,questionNumber]);

   const delay= (duration,callback) =>{
    setTimeOut(() =>{
    callback();
    },duration)
   };

   const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(4000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })
    delay(5000, () => {
      if(a.correct) {
        correctAnswer();
        delay(2000, () => {
           setQuestionNumber((prev) => prev +1);
           setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(2000, () => {
           setTimeOut(true);
        });
      }
    })
   };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
       <div className="answers">
        {question?.answers.map((a) =>(
         <div 
         className={selectedAnswer===a? className:"answer"}
          onClick={() => !selectedAnswer && handleClick(a)}>
          {a.text}
         </div>
         ))}
       </div>
    </div>
  )
}

export default Trivia
