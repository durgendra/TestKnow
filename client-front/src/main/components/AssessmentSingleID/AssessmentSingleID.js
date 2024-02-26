import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from 'react-router-dom';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useValue } from '../../../main/context/ContextProvider';
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import CopyToClipboardButton from 'main/components/common/CopyToClipboard';
import { getFAQSingle } from 'main/actions/faq';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Link from '@mui/material/Link';
import { createStartQuiz } from '../../actions/startQuiz';

const AssessmentSingleID = () => {
  let { faqId } = useParams();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const {
    state: { product, currentUser },
    dispatch,
  } = useValue();
  useEffect(() => {
    // console.log(faqId);
    // getFAQSingle('65c87086672a8dc15b8567ea', currentUser, dispatch);
    getFAQSingle(faqId, currentUser, dispatch);
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //   .then((response) => {
    //     dispatch({ type: 'UPDATE_DAILYKT', payload: item });
    //   });
  }, [faqId]);

  const navigate = useNavigate();

  const handleSubmit = async (category = '', difficulty = '') => {
    const optionMore = {
      objectId: product._id,
      // objectId: '659675a6b41c3cf8a9588f2f',
      // objectId: '659f6eee561e338ce06c31df',
    };
    await createStartQuiz(optionMore, currentUser, dispatch, 0);
    // console.log(product);
    navigate(`/faq/start-quiz/quiz/${product._id}`);
  };

  return (
    // <Container>

    <>
      {product && (
        <>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                // color: 'common.white',
                marginBottom: 2,
              }}
            >
              {product.assessmentTitle}
            </Typography>
            <Box display={'flex'} alignItems={'center'}>
              <ListItemText
                sx={{ margin: 0 }}
                primary={`Quiz created by ${product.uName}`}
                secondary={` On ${moment(product?.createdAt).format(
                  'Do MMM YYYY',
                )}`}
                primaryTypographyProps={{
                  sx: { color: alpha('#00000', 0.8) },
                }}
                // secondaryTypographyProps={{
                //   sx: { color: alpha('#ffffff', 0.8) },
                // }}
              />
            </Box>
          </Box>
        </>
      )}
      {/* </Container> */}
      {/* </Box> */}
      {/* <Hero /> */}
      <Container>
        {product && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
                    <Typography
                      variant="h6"
                      // data-aos={'fade-up'}
                      sx={{
                        fontWeight: 400,
                        marginBottom: 2,
                      }}
                    >
                      You are requested to take assessment on an AI generated
                      quiz created by {product.uName}. Please click below to
                      start the assessment
                    </Typography>
                    <Box
                      display="flex"
                      marginTop={{ xs: 2, md: 0 }}
                      flexDirection={{ xs: 'row', sm: 'row' }}
                      alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                    >
                      <Button
                        color="primary"
                        variant="outlined"
                        sx={{ m: 4 }}
                        marginLeft={2}
                        // endIcon={<Send />}
                        // disabled={!showSubmit}
                        onClick={handleSubmit}
                      >
                        Start Assessment
                      </Button>
                    </Box>
                    {/* <CopyToClipboardButton {...{ text: dailyKT?.result }} /> */}
                    <br></br>
                    {/* <Typography
                      variant={'subtitle1'}
                      component="span"
                      style={{ whiteSpace: 'pre-wrap' }}
                    >
                      {product?.resultAI}
                    </Typography> */}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* {isMd ? ( */}
                <Box marginBottom={4}>
                  <Box component={Card} variant={'outlined'} padding={2}>
                    <Typography
                      variant="h6"
                      // data-aos={'fade-up'}
                      sx={{
                        fontWeight: 700,
                        marginBottom: 2,
                      }}
                    >
                      Knowledge test is based on the following
                    </Typography>
                    <Grid container spacing={2} padding={1}>
                      <Box
                        component={Card}
                        width={1}
                        height={1}
                        boxShadow={0}
                        borderRadius={0}
                        display={'flex'}
                        flexDirection={{ xs: 'column', md: 'column' }}
                        sx={{
                          backgroundImage: 'none',
                          bgcolor: 'transparent',
                        }}
                      >
                        {product?.docLink ? (
                          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <div style={{ height: '750px' }}>
                              <Viewer
                                fileUrl={product.docLink}
                                // plugins={[defaultLayoutPluginInstance]}
                              />
                            </div>
                          </Worker>
                        ) : (
                          <>
                            {product?.paragraph ? (
                              <Typography
                                variant={'subtitle1'}
                                component="span"
                                style={{ whiteSpace: 'pre-wrap' }}
                              >
                                {product?.paragraph}
                              </Typography>
                            ) : (
                              <CardContent
                                sx={{
                                  padding: 1,
                                  '&:last-child': { paddingBottom: 1 },
                                }}
                              >
                                {/* <Typography fontWeight={400}>
                                    Article Link: {dailyKT?.url}
                                  </Typography> */}
                                <Link
                                  target="_blank"
                                  href={product?.url}
                                  rel="noreferrer"
                                >
                                  {product.assessmentTitle}
                                </Link>
                              </CardContent>
                            )}
                          </>
                        )}
                        <CardContent
                          sx={{
                            padding: 1,
                            '&:last-child': { paddingBottom: 1 },
                          }}
                        >
                          {/* <Typography fontWeight={700}>{dailyKT.title}</Typography> */}
                          <Box marginY={1 / 4}>
                            <Typography
                              variant={'caption'}
                              color={'text.secondary'}
                              component={'i'}
                            >
                              Source: {product.source}
                            </Typography>
                          </Box>
                          {/* <Button
              size={'small'}
              target="_blank"
              rel="noreferrer"
              href={dailyKT.url}
            >
              More
            </Button> */}
                        </CardContent>
                      </Box>
                    </Grid>
                  </Box>
                </Box>
                {/* ) : null} */}
                {/* <SidebarNewsletter /> */}
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default AssessmentSingleID;
