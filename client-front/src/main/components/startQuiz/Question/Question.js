// import { Button } from '@material-ui';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useValue } from '../../../context/ContextProvider';
import { updateStartQuiz } from 'main/actions/startQuiz';

const Question = ({
  currQues,
  setCurrQues,
  testQuestions,
  options,
  correct,
  setScore,
  score,
  type,
}) => {
  const {
    state: { currentUser, startQuizId },
    dispatch,
  } = useValue();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return 'select';
    else if (selected === i && selected !== correct) return 'wrong';
    else if (i === correct) return 'select';
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);

    setError(false);
  };

  const handleNext = () => {
    if (currQues == testQuestions.length - 1) {
      if (selected) {
        testQuestions[currQues].SelectedAnswer = selected;
        // console.log(testQuestions);
        // console.log(startQuizId);
        const updatedFields = {
          testQuestions: testQuestions,
          userScore: score,
          totalScore: testQuestions.length,
        };
        updateStartQuiz(startQuizId, updatedFields, currentUser, dispatch);
        const data = {
          score: score,
          length: testQuestions.length,
          name: currentUser?.name,
          cuid: currentUser?.id,
          type: type,
          testQuestions: testQuestions,
        };
        navigate('/faq/start-quiz-result', { state: data });
      } else setError('Please select an option first');
    } else if (selected) {
      testQuestions[currQues].SelectedAnswer = selected;
      setCurrQues(currQues + 1);
      setSelected();
    } else setError('Please select an option first');
  };

  const handleQuit = () => {
    setCurrQues(0);
    dispatch({ type: 'RESET_TESTQUESTIONS' });
    // setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>
      <div className="singleQuestion">
        <h2>{testQuestions[currQues].QuestionText}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
              // <Button
              //   className={`singleOption  ${selected && handleSelect(i)}`}
              //   key={i}
              //   onClick={() => handleCheck(i)}
              //   disabled={selected}
              // >
              //   {i}
              // </Button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? 'Submit' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

// const Question = ({
//   currQues,
//   setCurrQues,
//   questions,
//   options,
//   correct,
//   setScore,
//   score,
// }) => {
//   const {
//     state: { currentUser, testQuestions },
//     dispatch,
//   } = useValue();
//   const [selected, setSelected] = useState();
//   const [error, setError] = useState(false);

//   const navigate = useNavigate();

//   const handleSelect = (i) => {
//     if (selected === i && selected === correct) return 'select';
//     else if (selected === i && selected !== correct) return 'wrong';
//     else if (i === correct) return 'select';
//   };

//   const handleCheck = (i) => {
//     setSelected(i);
//     if (i === correct) setScore(score + 1);
//     setError(false);
//   };

//   const handleNext = () => {
//     if (currQues > 8) {
//       navigate('/result');
//     } else if (selected) {
//       setCurrQues(currQues + 1);
//       setSelected();
//     } else setError('Please select an option first');
//   };

//   const handleQuit = () => {
//     setCurrQues(0);
//     dispatch({ type: 'RESET_TESTQUESTIONS' });
//     // setQuestions();
//   };

//   return (
//     <div className="question">
//       <h1>Question {currQues + 1} :</h1>

//       <div className="singleQuestion">
//         <h2>{questions[currQues].question}</h2>
//         <div className="options">
//           {error && <ErrorMessage>{error}</ErrorMessage>}
//           {options &&
//             options.map((i) => (
//               <button
//                 className={`singleOption  ${selected && handleSelect(i)}`}
//                 key={i}
//                 onClick={() => handleCheck(i)}
//                 disabled={selected}
//               >
//                 {i}
//               </button>
//             ))}
//         </div>
//         <div className="controls">
//           <Button
//             variant="contained"
//             color="secondary"
//             size="large"
//             style={{ width: 185 }}
//             href="/"
//             onClick={() => handleQuit()}
//           >
//             Quit
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             style={{ width: 185 }}
//             onClick={handleNext}
//           >
//             {currQues > 20 ? 'Submit' : 'Next Question'}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question;
