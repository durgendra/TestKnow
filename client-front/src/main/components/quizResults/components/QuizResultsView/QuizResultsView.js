import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import { useValue } from '../../../../context/ContextProvider';
import { createKnowledge } from '../../../../actions/faq';
import { createStartQuiz } from '../../../../actions/startQuiz';
import { useNavigate } from 'react-router-dom';
import CopyToClipboardButton from 'main/components/common/CopyToClipboard';

const QuizResultsView = () => {
  const {
    state: { product, currentUser, testQuestions, score },
    dispatch,
  } = useValue();
  const theme = useTheme();
  const navigate = useNavigate();
  // console.log(product);

  const handleSubmit = async (category = '', difficulty = '') => {
    const optionMore = {
      objectId: product._id,
      // objectId: '659675a6b41c3cf8a9588f2f',
      // objectId: '659f6eee561e338ce06c31df',
    };
    await createStartQuiz(optionMore, currentUser, dispatch, 0);
    navigate(`/faq/start-quiz/quiz/${product._id}`);
  };
  const handleAssessment = async () => {
    navigate(`/faq/assessment/${product._id}`);
  };

  const handleSubmitKeywords = (keyword) => {
    const keywordNew = { keyword: keyword, resultAI: '' };
    createKnowledge(keywordNew, currentUser, dispatch);
    navigate('/faq/knowledge-result');
  };

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Knowledge Test (AI generated Quiz)
          </Typography>
        </Box>
        {/* {product && product?.resultAI && (
          <> */}
        {/* <Box
          display="flex"
          marginTop={{ xs: 2, md: 0 }}
          flexDirection={{ xs: 'row', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        > */}
        {/* <Box
            // component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          > */}
        {/* <Button
            color="primary"
            variant="outlined"
            sx={{ m: 4 }}
            marginLeft={2}
            // endIcon={<Send />}
            // disabled={!showSubmit}
            onClick={handleSubmit}
          >
            Start Assessment
          </Button> */}
        {/* </Box> */}
        {/* </>
        )} */}
      </Box>
      {product && product?.resultAI && (
        <>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box
                width={1}
                height={1}
                minHeight={{ xs: 400, md: 800 }}
                borderRadius={2}
                border={`2px solid ${theme.palette.divider}`}
                sx={{
                  borderStyle: 'dashed',
                }}
              >
                {/* <CopyToClipboardButton {...{ text: product?.resultAI }} /> */}
                <Box p={1}>
                  <Typography
                    component="span"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    Quiz has been generated. Check generated questions through
                    an assessment
                  </Typography>
                  <Typography color="text.secondary">
                    You will get all questions and answers of the quiz at the
                    end of your assessment.
                  </Typography>
                  {/* <Typography
                    component="span"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {product?.resultAI} <br /> <br />
                    Answers: <br />
                    {product?.quizAnswer};
                  </Typography> */}
                </Box>
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ m: 4 }}
                  marginLeft={2}
                  // endIcon={<Send />}
                  // disabled={!showSubmit}
                  onClick={handleSubmit}
                >
                  Check questions
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ m: 4 }}
                  marginLeft={2}
                  // endIcon={<Send />}
                  // disabled={!showSubmit}
                  onClick={handleAssessment}
                >
                  Create quiz link to share
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                width={1}
                height={1}
                minHeight={{ xs: 400, md: 800 }}
                borderRadius={2}
                border={`2px solid ${theme.palette.divider}`}
                sx={{
                  borderStyle: 'dashed',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '5vh',
                  }}
                >
                  <Typography fontWeight={600} variant={'h6'} gutterBottom>
                    These are important keywords in your content. Learn more
                    about these keywords.
                  </Typography>
                </Box>
                <Box p={1}>
                  <>
                    {product?.keywords.map((keyword) => {
                      return (
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ m: 0.5 }}
                          onClick={() => handleSubmitKeywords(keyword)}
                        >
                          {keyword}
                        </Button>
                      );
                    })}
                  </>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default QuizResultsView;
