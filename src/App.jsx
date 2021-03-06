import { useState } from 'react';
import './App.css';
import Trivia from './Components/Trivia';
import data from './Data.js'

function App() {
  const [questionNumber,setQuestionNumber]=useState(1);
  const [timeOut,setTimeOut]=useState(false);
  const [earned,setEarned]=useState("$ 0");
  const mnyPyramids=[
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 200"},
    {id:3,amount:"$ 300"},
    {id:4,amount:"$ 500"},
    {id:5,amount:"$ 1,000"},
    {id:6,amount:"$ 2,000"},
    {id:7,amount:"$ 4,000"},
    {id:8,amount:"$ 8,000"},
    {id:9,amount:"$ 16,000"},
    {id:10,amount:"$ 32,000"},
    {id:11,amount:"$ 64,000"},
    {id:12,amount:"$ 1,25,000"},
    {id:13,amount:"$ 2,50,000"},
    {id:14,amount:"$ 5,00,000"},
    {id:15,amount:"$ 10,00,000"}
  ].reverse();
  return (
    <div className="App">
     <div className="main">
      {timeOut ? (
        <h1>You earned: {earned}</h1>
      ) : (

      <>
      <div className="top">
        <div className="timer">30</div>
      </div>
      <div className='bottom'><Trivia
       data={data}
       questionNumber={questionNumber}
       setQuestionNumber={setQuestionNumber}
       setTimeOut={setTimeOut}
      />
      </div>
      </>
      )}
     </div>
       <div className="pyramid">
        <ul className="moneyList">
          {mnyPyramids.map((m) =>(
         <li className={questionNumber === m.id ? "moneyListItem active":"moneyListItem"}>
         <span className='moneyListNumber'>{m.id}</span>
          <span className='moneyListAmnt'>{m.amount}</span>
         </li>
         ))}
        </ul>
        
       </div>
     
    </div>
  );
}

export default App;
