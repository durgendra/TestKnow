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
import { addChatDoc } from '../../actions/chatDoc';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const AddChatDoc = ({ setSelectedLink, link }) => {
  const {
    state: { papers, product, currentUser },
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
    const papersServer = papers.map(function (element) {
      return { pLink: element.url, pLocal: element.local };
    });
    // const nPapers = [{ pLink: papers[0] }];
    const summary = {
      title: 'new summary',
      papers: papersServer,
    };
    addChatDoc(summary, currentUser, dispatch, 0);
    navigate('/faq/chat');
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
              {'Enter Paragraph '}
            </Typography>
          </Box>
          <Box sx={{ pb: 7, px: 1 }}>
            {
              {
                0: <AddDocs />,
              }[activeStep]
            }
            <Stack sx={{ alignItems: 'center' }}>
              <Button
                variant="contained"
                sx={{ m: 4 }}
                endIcon={<Send />}
                disabled={!showSubmit}
                onClick={handleSubmit}
              >
                Submit
              </Button>
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
                {'Generated FAQ '}
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

export default AddChatDoc;
