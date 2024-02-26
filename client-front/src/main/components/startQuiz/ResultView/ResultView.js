import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResultView.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
// import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useValue } from '../../../context/ContextProvider';
import CopyToClipboardButtonFull from 'main/components/common/CopyToClipboardFull';
import { useParams } from 'react-router-dom';
import { getAssessmentSingle } from '../../../actions/startQuiz';
import { red, green, blue } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// const urlRef = process.env.REACT_APP_CLIENT_URL;
const ResultView = () => {
  let { id } = useParams();
  // const history = useHistory();
  const {
    state: { currentUser },
    dispatch,
  } = useValue();
  const navigate = useNavigate();
  const [AssessmentDetails, setAssessmentDetails] = useState();

  useEffect(() => {
    // console.log('page load');
    async function getAssessmentResult(id) {
      try {
        const data = await getAssessmentSingle(id, currentUser, dispatch);

        setAssessmentDetails(data);
      } catch (err) {
        console.log('Error occurred when fetching questions');
      }
    }

    getAssessmentResult(id);
  }, []);

  // const handleAssessment = async () => {
  //   navigate(`/faq/assessment/${product._id}`);
  // };

  return (
    <div>
      {AssessmentDetails && (
        <>
          <div className="result">
            <span className="subtitle">
              Final Score : {AssessmentDetails.userScore} correct out of{' '}
              {AssessmentDetails.totalScore} questions
            </span>
            {/* <span className="subtitle">Result: {data.name}</span> */}
            {/* <br></br> */}
            {/* <br></br>
        <span className="title">
          Final Score : {data.score} correct out of {data.length} questions
        </span> */}
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Quiz Details: Show all questions and answers
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {AssessmentDetails.quizBody.map((item, i) => (
                <Grid item xs={12} md={6}>
                  <Divider />
                  <Typography variant="h8" sx={{ fontWeight: 'bold' }}>
                    {item.QuestionNo}. {item.QuestionText}
                  </Typography>
                  <Box>
                    {item.QuestionOptions.map((option, i) => (
                      <Box>
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked={
                                option == item.CorrectAnswer ||
                                option == item.SelectedAnswer
                              }
                              style={{
                                color:
                                  option == item.CorrectAnswer
                                    ? green[500]
                                    : option == item.SelectedAnswer
                                    ? red[500]
                                    : blue[500],
                              }}
                            />
                          }
                          label={option}
                        />
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </AccordionDetails>
          </Accordion>
          <Divider></Divider>
          <br></br>
          <div className="result2">
            <Button
              variant="text"
              color="primary"
              size="large"
              style={{ alignSelf: 'center', marginTop: 20 }}
              href="/faq"
            >
              Generate another AI Quiz
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultView;
