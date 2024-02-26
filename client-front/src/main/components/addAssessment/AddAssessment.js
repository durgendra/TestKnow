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
import { useParams } from 'react-router-dom';
import { useValue } from '../../context/ContextProvider';
import { Send } from '@mui/icons-material';
import { updateFAQStatus } from 'main/actions/faq';
import { alpha, useTheme } from '@mui/material/styles';
import AddAssessDetails from './addAssessDetails/AddAssessDetails';
import { useNavigate } from 'react-router-dom';

const AddAssessment = ({ setSelectedLink, link }) => {
  let { type, id } = useParams();
  const {
    state: { detailsDailyKT, currentUser },
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
    if (detailsDailyKT.title.length > 3) {
      if (!steps[0].completed) setComplete(0, true);
    } else {
      if (steps[0].completed) setComplete(0, false);
    }
  }, [detailsDailyKT]);

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
  const handleSubmitAssessment = () => {
    const dailyAssess = {
      assessmentTitle: detailsDailyKT.title,
      assessmentSource: detailsDailyKT.source ? detailsDailyKT.source : '',
      assessmentShared: 1,
    };
    updateFAQStatus(dailyAssess, id, currentUser, dispatch);
    navigate(`/faq/get/assessment/${id}`);

    // setSubmitStep(1);
  };
  const theme = useTheme();
  return (
    <Container sx={{ my: 1 }}>
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
          {'Enter details to convert questions into assessment '}
        </Typography>
      </Box>
      {/* <Grid container spacing={4}> */}
      <Grid item xs={12} md={12}>
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
              {'Enter Input'}
            </Typography>
          </Box>
          <Box sx={{ pb: 7, px: 1 }}>
            {
              {
                0: <AddAssessDetails />,
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
                  onClick={handleSubmitAssessment}
                >
                  Submit to create quiz link
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Grid>
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
      {/* </Grid> */}
    </Container>
  );
};

export default AddAssessment;
