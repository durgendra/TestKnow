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
import AddNewsDetails from './addNewsDetails/AddNewsDetails';
import { useValue } from '../../context/ContextProvider';
import { Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { createOptions } from '../../actions/option';
import { createNews } from '../../actions/newsQuiz';
import { alpha, useTheme } from '@mui/material/styles';

const FindNews = ({ setSelectedLink, link }) => {
  const {
    state: { detailsNewsQuiz, currentUser },
    dispatch,
  } = useValue();
  const [activeStep, setActiveStep] = useState(0);
  const [submitStep, setSubmitStep] = useState(0);
  const [steps, setSteps] = useState([{ label: 'Details', completed: false }]);

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
    if (detailsNewsQuiz.name.length > 2) {
      if (!steps[0].completed) setComplete(0, true);
    } else {
      if (steps[0].completed) setComplete(0, false);
    }
  }, [detailsNewsQuiz]);

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
    const newsProduct = {
      newsSearchTitle: detailsNewsQuiz.name,
    };
    // createOptions(product, currentUser, dispatch, 0);
    createNews(newsProduct, currentUser, dispatch, 0);
    navigate('/faq/explore');
  };
  const theme = useTheme();
  return (
    <Container sx={{ my: 1 }}>
      <Grid container spacing={4}>
        {/* <Grid item xs={12} md={6}> */}
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
              {'Search news articles '}
            </Typography>
          </Box>
          <Box sx={{ pb: 7, px: 1 }}>
            {
              {
                0: <AddNewsDetails />,
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
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
        {/* </Grid> */}
        {/* <Grid item xs={12} md={6}>
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
            )}
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default FindNews;
