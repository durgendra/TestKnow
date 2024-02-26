import { Button, Divider } from '@mui/material';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import './Result.css';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useValue } from '../../../context/ContextProvider';
import CopyToClipboardButtonFull from 'main/components/common/CopyToClipboardFull';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { red, green, blue } from '@mui/material/colors';

const urlRef = process.env.REACT_APP_CLIENT_URL;
const Result = () => {
  // const history = useHistory();
  const {
    state: { product, dailyKT },
    dispatch,
  } = useValue();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (!data || !data.name) {
      navigate('/');
      // history.push("/");
    }
  }, [data.name, navigate]);

  const handleAssessment = async () => {
    navigate(`/faq/assessment/${product._id}`);
  };

  return (
    <div>
      <div className="result">
        <span className="subtitle">
          Final Score : {data.score} correct out of {data.length} questions
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
          <Typography variant="h6">
            Quiz Details: Show all questions and answers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.testQuestions.map((item, i) => (
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
      {/* <div className="result"> */}
      {data.type === 'quiz' && product && product?.assessmentShared && (
        <>
          <div className="result">
            <span className="title">
              Test your students or friends knowledge through the same
              assessment. Copy and Share the link below.
            </span>

            <Box marginTop={{ xs: 2, md: 2 }}>
              <CopyToClipboardButtonFull
                {...{ text: `${urlRef}/faq/shared/assessment/${product._id}` }}
              />
            </Box>
          </div>
          {/* <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
          >
            <Box>
              <Typography fontWeight={400} variant={'h5'} gutterBottom>
                Test your students or friends knowledge. Share the link below.
              </Typography>
              <Typography>{`${urlRef}/faq/shared/assessment/${product._id}`}</Typography>
              <Button href={`${urlRef}/faq/shared/assessment/${product._id}`}>
                Preview the assessment page
              </Button>
            </Box>
            <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
              <CopyToClipboardButtonFull
                {...{ text: `${urlRef}/faq/shared/assessment/${product._id}` }}
              />
            </Box>
          </Box> */}
        </>
      )}

      {data.type === 'quiz' &&
        product &&
        !product?.assessmentShared &&
        product?.uid === data.cuid && (
          <>
            <br></br>
            <div className="result">
              <span className="title">
                Test your students or friends knowledge. Convert the question
                sets into a shareable assessment link and share it with your
                students or friends.
              </span>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: 'center', marginTop: 20 }}
                onClick={handleAssessment}
              >
                Create quiz link to share
              </Button>
            </div>
          </>
        )}
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
    </div>
  );
};

export default Result;
