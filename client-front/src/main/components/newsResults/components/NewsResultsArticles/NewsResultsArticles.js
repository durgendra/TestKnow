import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import { useValue } from '../../../../context/ContextProvider';
// import { createQuiz, createStatementQuiz } from '../../../../actions/newsQuiz';
import { createQuiz } from '../../../../actions/faq';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import timeDifference from '../../../../utils/DateTime';
import { colors } from '@mui/material';

const NewsResultsArticles = () => {
  const {
    state: { currentUser, newsProduct },
    dispatch,
  } = useValue();
  const theme = useTheme();
  const navigate = useNavigate();
  // const handleSubmit = () => {
  //   const optionMore = {
  //     objectId: newsProduct._id,
  //   };
  //   console.log(newsProduct);
  //   // // createOptions(product, currentUser, dispatch, 0);
  //   // createQuiz(optionMore, currentUser, dispatch, 0);
  //   // navigate('/faq/standardquiz');
  // };

  const handleSubmitNews = (body) => {
    const product = {
      paragraph: body,
      category: 'text',
      resultAI: '',
    };
    createQuiz(product, currentUser, dispatch, 0);
    navigate('/faq/quiz-result');
  };

  // const handleStatementSubmit = () => {
  //   const optionMore = {
  //     objectId: newsProduct._id,
  //   };
  //   // // createOptions(product, currentUser, dispatch, 0);
  //   createStatementQuiz(optionMore, currentUser, dispatch, 0);
  //   navigate('/faq/statementquiz');
  // };

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
            News Results based on your search term
          </Typography>
          <Typography color={'text.secondary'}>
            Open any news article and click "Generate Quiz" to get AI generated
            Quiz.
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
          {/* <Button
            color="primary"
            variant="outlined"
            sx={{ m: 4 }}
            marginLeft={2}
            // endIcon={<Send />}
            // disabled={!showSubmit}
            onClick={handleSubmit}
          >
            Quiz
          </Button> */}
          {/* <Button
            color="primary"
            variant="outlined"
            sx={{ m: 4 }}
            marginLeft={2}
            // endIcon={<Send />}
            // disabled={!showSubmit}
            onClick={handleStatementSubmit}
          >
            Statement Quiz
          </Button> */}
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
      {newsProduct && newsProduct?.newsResults && (
        <>
          {/* <Grid container spacing={4}> */}
          <Box>
            {newsProduct?.newsResults.map((item, i) => (
              // <Grid item xs={12} key={i}>
              //   <Box
              //     component={Card}
              //     width={1}
              //     height={1}
              //     borderRadius={0}
              //     boxShadow={0}
              //     display={'flex'}
              //     flexDirection={{ xs: 'column', md: 'row' }}
              //     sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
              //   >
              //     {/* <Box
              //       sx={{
              //         width: { xs: 1, md: '30%' },
              //       }}
              //     > */}
              //     {/* <Box
              //     component={'img'}
              //     loading="lazy"
              //     height={1}
              //     width={1}
              //     src={item.image}
              //     alt="..."
              //     sx={{
              //       objectFit: 'cover',
              //       maxHeight: 200,
              //       borderRadius: 2,
              //       filter:
              //         theme.palette.mode === 'dark'
              //           ? 'brightness(0.7)'
              //           : 'none',
              //     }}
              //   /> */}
              //     {/* </Box> */}
              //     <CardContent
              //       sx={{
              //         width: { xs: 1, md: '70%' },
              //         display: 'flex',
              //         flexDirection: 'column',
              //         justifyContent: 'center',
              //       }}
              //     >
              //       <Typography
              //         fontWeight={700}
              //         sx={{ textTransform: 'uppercase' }}
              //       >
              //         {item.nTitle}
              //       </Typography>
              //       <Box marginY={1}>
              //         <Typography
              //           variant={'caption'}
              //           color={'text.secondary'}
              //           component={'i'}
              //         >
              //           {item.nSource}
              //         </Typography>
              //       </Box>

              //       <Typography
              //         color="text.secondary"
              //         sx={{
              //           overflow: 'hidden',
              //           textOverflow: 'ellipsis',
              //           display: '-webkit-box',
              //           WebkitLineClamp: '2',
              //           WebkitBoxOrient: 'vertical',
              //         }}
              //       >
              //         {item.nBody}
              //       </Typography>
              //       <Box
              //         marginTop={2}
              //         display={'flex'}
              //         justifyContent={'flex-end'}
              //       >
              //         <Button
              //           endIcon={
              //             <Box
              //               component={'svg'}
              //               xmlns="http://www.w3.org/2000/svg"
              //               fill="none"
              //               viewBox="0 0 24 24"
              //               stroke="currentColor"
              //               width={24}
              //               height={24}
              //             >
              //               <path
              //                 strokeLinecap="round"
              //                 strokeLinejoin="round"
              //                 strokeWidth={2}
              //                 d="M17 8l4 4m0 0l-4 4m4-4H3"
              //               />
              //             </Box>
              //           }
              //         >
              //           Read More
              //         </Button>
              //       </Box>
              //     </CardContent>
              //   </Box>
              // </Grid>
              // <Grid item xs={12} key={i}>
              <Box
                component={Accordion}
                key={i}
                paddingY={1}
                elevation={0}
                sx={{
                  '&:first-of-type': {
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1,
                  },
                  '&:not(:first-of-type):before': {
                    opacity: '1 !important',
                    display: 'block !important',
                  },
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                }}
              >
                <Box
                  component={AccordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={`panel1a-header--${i}`}
                  padding={'0 !important'}
                >
                  <Box>
                    <Typography fontWeight={600}>{item.nTitle}</Typography>
                    <Typography color="text.secondary">
                      Published in {item.nSource},{' '}
                      {timeDifference(Date.parse(item.nDate))}
                    </Typography>
                    {/* <br></br> */}
                    <Typography
                      color="text.tertiary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {item.nBody}
                    </Typography>
                  </Box>
                </Box>
                <AccordionDetails>
                  <Typography>{item.nBody}</Typography>
                  <Box display={'flex'} justifyContent={'flex-end'}>
                    <Box
                      component={Button}
                      color="primary"
                      size="small"
                      marginTop={2}
                      variant={'outlined'}
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          width={24}
                          height={24}
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </Box>
                      }
                      sx={{ float: 'right' }}
                      onClick={() => handleSubmitNews(item.nBody)}
                      // onClick={handleSubmitNews(item.nBody)}
                    >
                      Generate Quiz
                    </Box>
                  </Box>
                </AccordionDetails>
              </Box>
              // </Grid>
            ))}
          </Box>
          {/* </Grid> */}
        </>
      )}
    </Box>
  );
};

export default NewsResultsArticles;
