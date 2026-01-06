import React, { useEffect, useState } from 'react';
import questions from './questions';
import './index.css';

const Quiz = () => {
  const [select, setselect] = useState("");
  const [score, setscore] = useState(0);
  const [incr, setincr] = useState(0);
  const [qnum, setqnum] = useState(0);
  const [time, settime] = useState(60); // overall quiz timer in seconds
  const [result, setresult] = useState(false);

  // Random initial question index
  useEffect(() => {
    const random = Math.floor(Math.random() * questions.length);
    setincr(random);
  }, []);

  // Overall timer effect
  useEffect(() => {
    if (result) return;
    if (time <= 0) {
      setresult(true);
      return;
    }
    const timer = setInterval(() => {
      settime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, result]);

  const handlenext = () => {
    if (qnum + 1 < 10) {
      if (select === questions[incr].answer) {
        setscore(prev => prev + 1);
      }
      setselect("");

      if (incr + 1 < questions.length) {
        const random = Math.floor(Math.random() * questions.length);
        setincr(random);
        setqnum(prev => prev + 1);
      }
    } else {
      setresult(true);
    }
  };

  const reset = () => {
    window.location.reload();
  };

  if (result) {
    return (
      <div className="quiz-container">
        <h1>Your score is {score}</h1>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    );
  }

  return (
    <>
      {/* <h1>Quiz</h1> */}
      <div className="quiz-container">
        <div className="text-card">
          <div className="timer">Time Left: {time}s</div>
          <div className="text">{qnum + 1} / 10</div>
        </div>
        <div className="card">
          <h2>Q{qnum + 1}) {questions[incr].question}</h2>
          {questions[incr].options.map((item, index) => (
            <div className='options' key={index}>
              <input
                className='input'
                id={item}
                name='answer'
                type="radio"
                value={item}
                checked={select === item}
                onChange={(e) => setselect(e.target.value)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
          <button className="next-btn" onClick={handlenext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
