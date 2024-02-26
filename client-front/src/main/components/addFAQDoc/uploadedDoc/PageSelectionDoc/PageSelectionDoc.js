import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Grid,
  Stack,
  Autocomplete,
  TextField,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import { useValue } from '../../../../context/ContextProvider';
import { createFAQ, createQuiz } from '../../../../actions/faq';
import { useNavigate, useLocation } from 'react-router-dom';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

const PageSelectionDoc = () => {
  const {
    state: { currentUser, pageNumber },
    dispatch,
  } = useValue();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: 'Add Papers', completed: false },
  ]);

  const location = useLocation();
  const data2 = location.state;
  const [showSubmit, setShowSubmit] = useState(false);
  const [getPages, setPages] = useState([1]);
  // useEffect(() => {
  //   setSelectedLink(link);
  // });

  useEffect(() => {
    if (data2.item) {
      var loadingTask = pdfjsLib.getDocument(data2.item.pLink);
      // var loadingTask = getDocument(paperURL);

      loadingTask.promise
        .then(function (pdf) {
          const pageNumbers = pdf.numPages;
          dispatch({
            type: 'RESET_PAGENUMBERS',
          });
          dispatch({
            type: 'UPDATE_PAGENUMBERS',
            payload: pageNumbers,
          });
          setPages(Array.from({ length: pageNumbers }, (_, i) => i + 1));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log('Subsequent Render');
    }
  }, [data2.item]);
  const handlePageNumber = (event, value) => {
    dispatch({
      type: 'UPDATE_PAGENUMBER',
      payload: value,
    });
    if (value) {
      if (!showSubmit) setShowSubmit(true);
    } else {
      if (showSubmit) setShowSubmit(false);
    }
  };

  const navigate = useNavigate();
  const handleQuiz = () => {
    const product = {
      paragraph: '',
      category: 'doc',
      resultAI: '',
      pLink: data2.item.pLink,
      pageNumber: pageNumber,
    };
    createQuiz(product, currentUser, dispatch, 0);
    navigate('/faq/quiz-result');
    // navigate('/faq/select-page');
    // createQuizTextBook(optionMore, currentUser, dispatch, 0);
  };
  const handleFAQ = () => {
    const product = {
      paragraph: '',
      category: 'doc',
      resultAI: '',
      pLink: data2.item.pLink,
      pageNumber: pageNumber,
    };
    createFAQ(product, currentUser, dispatch, 0);
    navigate('/faq/faq-result');
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
            Last step: Select page to generate knowledge tests
          </Typography>
          <Typography color={'text.secondary'}>
            The Chapter has many pages. Use dropdown to select page
          </Typography>
        </Box>
        <Box
          display="flex"
          marginTop={{ xs: 2, md: 0 }}
          flexDirection={{ xs: 'row', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        ></Box>
      </Box>
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
            {/* <Typography variant="h6" component="span">
              {'Upload a document to get knowledge test '}
            </Typography> */}
          </Box>
          <Box sx={{ pb: 7, px: 5 }}>
            {
              {
                0: (
                  <Autocomplete
                    onChange={(event, value) => handlePageNumber(event, value)}
                    id="pageNumber"
                    getOptionLabel={(getPages) => `${getPages}`}
                    options={getPages}
                    renderOption={(props, getPages) => (
                      <Box component="li" {...props} key={getPages}>
                        {getPages}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Page" />
                    )}
                    sx={{
                      width: {
                        xs: '150px',
                        sm: '200px',
                      },
                    }}
                  />
                ),
              }[activeStep]
            }
            <ImageList
              rowHeight={250}
              sx={{
                '&.MuiImageList-root': {
                  gridTemplateColumns:
                    'repeat(auto-fill, minmax(250px, 1fr))!important',
                },
              }}
            >
              <ImageListItem key={1} cols={1} rows={1}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer fileUrl={data2.item.pLink} />
                </Worker>
              </ImageListItem>
            </ImageList>

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
                  onClick={handleQuiz}
                >
                  Quiz
                </Button>

                <Button
                  variant="outlined"
                  sx={{ m: 4 }}
                  endIcon={<Send />}
                  disabled={!showSubmit}
                  onClick={handleFAQ}
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
    </Box>
  );
};

export default PageSelectionDoc;
