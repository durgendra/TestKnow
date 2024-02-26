import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../Question/Question';
import { useValue } from '../../../context/ContextProvider';
import {
  createStartQuiz,
  createStartQuizDaily,
} from '../../../actions/startQuiz';
import './Quiz.css';

const Quiz = () => {
  let { type, id } = useParams();
  const {
    state: { product, currentUser },
    dispatch,
  } = useValue();
  const [testQuestions, setTestQuestions] = useState();
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function getDailyQuizQuestions(id) {
      try {
        const optionMore = {
          objectId: id,
          // objectId: '659675a6b41c3cf8a9588f2f',
          // objectId: '659f6eee561e338ce06c31df',
        };
        const data = await createStartQuizDaily(
          optionMore,
          currentUser,
          dispatch,
          0,
        );
        // console.log(data);
        setTestQuestions(data);
        // console.log(testQuestions);
      } catch (err) {
        console.log('Error occurred when fetching questions');
      }
    }

    async function getFAQQuizQuestions(id) {
      try {
        const optionMore = {
          objectId: id,
          // objectId: '659675a6b41c3cf8a9588f2f',
          // objectId: '659f6eee561e338ce06c31df',
        };
        const data = await createStartQuiz(
          optionMore,
          currentUser,
          dispatch,
          0,
        );
        // console.log(data);
        setTestQuestions(data);
        // console.log(testQuestions);
      } catch (err) {
        console.log('Error occured when fetching questions');
      }
    }

    if (type === 'daily') {
      getDailyQuizQuestions(id);
    } else {
      getFAQQuizQuestions(id);
    }
  }, []);

  useEffect(() => {
    setOptions(
      testQuestions && handleShuffle(testQuestions[currQues]?.QuestionOptions),
    );
  }, [currQues, testQuestions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {currentUser.name}</span>

      {testQuestions ? (
        <>
          <div className="quizInfo">
            {/* <span>{testQuestions[currQues].category}</span> */}
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            testQuestions={testQuestions}
            options={options}
            correct={testQuestions[currQues]?.CorrectAnswer}
            score={score}
            setScore={setScore}
            type={type}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
