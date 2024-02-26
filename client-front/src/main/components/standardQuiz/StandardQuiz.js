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
import { useValue } from '../../context/ContextProvider';
// import { createFAQ, createQuiz, createSum } from '../../actions/faq';
import { alpha, useTheme } from '@mui/material/styles';
// import { createQuiz, createStatementQuiz } from '../../actions/newsQuiz';
import { useNavigate } from 'react-router-dom';

const StandardQuiz = ({ setSelectedLink, link }) => {
  const {
    state: { product, currentUser },
    dispatch,
  } = useValue();

  const theme = useTheme();
  const navigate = useNavigate();
  const handleSubmit = () => {};
  const handleStatementSubmit = () => {
    const optionMore = {
      objectId: product._id,
    };
    // // createOptions(product, currentUser, dispatch, 0);
    // createStatementQuiz(optionMore, currentUser, dispatch, 0);
    // navigate('/faq/statementquiz');
  };

  return (
    <Container sx={{ my: 1 }}>
      {/* <Grid container spacing={4}> */}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Standard Quiz
          </Typography>
          <Typography color={'text.secondary'}>
            Based on the news results from your search
          </Typography>
        </Box>
        <Box
          display="flex"
          marginTop={{ xs: 2, md: 0 }}
          flexDirection={{ xs: 'row', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        >
          {/* <Box
            // component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          > */}
          <Button
            color="primary"
            variant="outlined"
            sx={{ m: 4 }}
            marginLeft={2}
            // endIcon={<Send />}
            // disabled={!showSubmit}
            onClick={handleStatementSubmit}
          >
            Statement Quiz
          </Button>
          {/* <Button
            color="primary"
            variant="outlined"
            sx={{ m: 4 }}
            marginLeft={2}
            // endIcon={<Send />}
            // disabled={!showSubmit}
            onClick={handleSubmit}
          >
            Summary
          </Button> */}
          {/* </Box> */}
        </Box>
      </Box>
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
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '5vh',
            }}
          >
            <Typography variant="h6" component="span">
              {'Standard Quiz Results'}
            </Typography>
          </Box> */}
          {product && (
            <Box p={1}>
              <Typography component="span" style={{ whiteSpace: 'pre-wrap' }}>
                {product?.standardQuizAI}
              </Typography>
            </Box>
          )}
        </Box>
      </Grid>
      {/* </Grid> */}
    </Container>
  );
};

export default StandardQuiz;
