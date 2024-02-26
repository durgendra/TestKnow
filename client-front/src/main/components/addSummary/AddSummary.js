import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Step,
  StepButton,
  Stepper,
  Button,
  Stack,
} from '@mui/material';
import AddPapers from './addPapers/AddPapers';
import { useValue } from '../../context/ContextProvider';
import { Send } from '@mui/icons-material';
import { createSummary } from '../../actions/summary';
import { useNavigate } from 'react-router-dom';

const AddSummary = ({ setPage }) => {
  const {
    state: { papers, currentUser },
    dispatch,
  } = useValue();
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: 'Add Papers', completed: false },
  ]);

  const [showSubmit, setShowSubmit] = useState(false);
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
    const papersServer = papers.map(function (element) {
      return { pLink: element.url, pLocal: element.local };
    });
    // const nPapers = [{ pLink: papers[0] }];
    const summary = {
      title: 'new summary',
      papers: papersServer,
    };
    navigate('/faq/doc/faqsummary');
    createSummary(summary, currentUser, dispatch, setPage);
  };
  return (
    <Container sx={{ my: 4 }}>
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        sx={{ mb: 3 }}
      >
        {steps.map((step, index) => (
          <Step key={step.label} completed={step.completed}>
            <StepButton onClick={() => setActiveStep(index)}>
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ pb: 7 }}>
        {
          {
            0: <AddPapers />,
          }[activeStep]
        }

        <Stack direction="row" sx={{ pt: 2, justifyContent: 'space-around' }}>
          <Button
            color="inherit"
            disabled={!activeStep}
            onClick={() => setActiveStep((activeStep) => activeStep - 1)}
          >
            Back
          </Button>
          <Button disabled={checkDisabled()} onClick={handleNext}>
            Next
          </Button>
        </Stack>
        {showSubmit && (
          <Stack sx={{ alignItems: 'center' }}>
            <Button
              variant="contained"
              endIcon={<Send />}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default AddSummary;
