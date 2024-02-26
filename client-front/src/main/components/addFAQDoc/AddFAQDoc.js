import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Step,
  StepButton,
  Stepper,
  Button,
  Stack,
  Typography,
  Grid,
} from '@mui/material';
import AddDocs from './addDocs/AddDocs';
import { useValue } from '../../context/ContextProvider';
import { Send } from '@mui/icons-material';
import { createFAQ, createQuiz, createSum } from '../../actions/faq';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import UploadedDoc from './uploadedDoc/uploadedDoc';

const AddFAQDoc = ({ setSelectedLink, link }) => {
  const {
    state: { papers, product, currentUser, pageNumber },
    dispatch,
  } = useValue();
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: 'Add Papers', completed: false },
  ]);

  const [showSubmit, setShowSubmit] = useState(false);
  useEffect(() => {
    setSelectedLink(link);
  });
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((activeStep) => activeStep + 1);
    } else {
      const stepIndex = findUnfinished();
      setActiveStep(stepIndex);
    }
  };
  const checkDisabled = () => {
    if (activeStep < steps.length - 1) return false;
    const index = findUnfinished();
    if (index !== -1) return false;
    return true;
  };
  const findUnfinished = () => {
    return steps.findIndex((step) => !step.completed);
  };
  useEffect(() => {
    if (papers.length) {
      if (!steps[0].completed) setComplete(0, true);
    } else {
      if (steps[0].completed) setComplete(0, false);
    }
  }, [papers]);

  const setComplete = (index, status) => {
    setSteps((steps) => {
      steps[index].completed = status;
      return [...steps];
    });
  };
  useEffect(() => {
    if (findUnfinished() === -1) {
      if (!showSubmit) setShowSubmit(true);
    } else {
      if (showSubmit) setShowSubmit(false);
    }
  }, [steps]);

  const navigate = useNavigate();
  const handleSubmit = () => {
    // console.log(papers[0].local);
    const product = {
      paragraph: '',
      category: 'doc',
      resultAI: '',
      pLink: papers[0].url,
      docName: papers[0].local ? papers[0].local : '',
      pageNumber: pageNumber ? pageNumber : 1,
    };
    createFAQ(product, currentUser, dispatch, 0);
    navigate('/faq/faq-result');
  };
  const handleSubmitQuiz = () => {
    // console.log(papers[0].local);
    const product = {
      paragraph: '',
      category: 'doc',
      resultAI: '',
      pLink: papers[0].url,
      docName: papers[0].local ? papers[0].local : '',
      pageNumber: pageNumber ? pageNumber : 1,
    };
    createQuiz(product, currentUser, dispatch, 0);
    navigate('/faq/quiz-result');
    // setSubmitStep(1);
  };
  const theme = useTheme();
  return (
    <Box>
      <Container sx={{ my: 1 }}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          marginBottom={4}
        >
          <Box>
            <Typography fontWeight={700} variant={'h6'} gutterBottom>
              Upload or select a document to get AI generated knowledge test
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
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
                p={1}
              >
                <Typography variant="h6" component="span">
                  {'Upload a document'}
                </Typography>
              </Box>
              <Box sx={{ pb: 7, px: 5 }}>
                {
                  {
                    0: <AddDocs />,
                  }[activeStep]
                }
                <Stack sx={{ alignItems: 'center' }}>
                  <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                    marginTop={2}
                  >
                    <Button
                      variant="contained"
                      sx={{ m: 4 }}
                      endIcon={<Send />}
                      disabled={!showSubmit}
                      onClick={handleSubmitQuiz}
                    >
                      Quiz
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{ m: 4 }}
                      endIcon={<Send />}
                      disabled={!showSubmit}
                      onClick={handleSubmit}
                    >
                      Short Questions
                    </Button>
                    {/* <Button
                    variant="outlined"
                    sx={{ m: 4 }}
                    endIcon={<Send />}
                    disabled={!showSubmit}
                    onClick={handleSubmitQuiz}
                  >
                    Quiz
                  </Button> */}
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Box
            width={1}
            height={1}
            minHeight={{ xs: 400, md: 800 }}
            borderRadius={2}
            border={`2px solid ${theme.palette.divider}`}
            sx={{
              borderStyle: 'dashed',
            }}
          > */}
            <UploadedDoc />
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '5vh',
              }}
            >
              <Typography variant="h6" component="span">
                {'Result'}
              </Typography>
            </Box>
            {product && (
              <Box p={1}>
                <Typography component="span" style={{ whiteSpace: 'pre-wrap' }}>
                  {product?.resultAI}
                </Typography>
              </Box>
            )} */}
            {/* </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddFAQDoc;
