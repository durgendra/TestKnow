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
import { useValue } from '../../main/context/ContextProvider';
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
import { getDailyKTSingle } from 'main/actions/dailyKT';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Link from '@mui/material/Link';

const DailyKTSingleID = () => {
  let { dailyktId } = useParams();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const {
    state: { dailyKT },
    dispatch,
  } = useValue();
  useEffect(() => {
    getDailyKTSingle(dailyktId, dispatch);
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
  }, [dailyktId]);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    // const optionMore = {
    //   objectId: product._id,
    //   // objectId: '659675a6b41c3cf8a9588f2f',
    //   // objectId: '659f6eee561e338ce06c31df',
    // };
    // await createStartQuiz(optionMore, currentUser, dispatch, 0);
    // navigate('/faq/start-quiz');
    navigate(`/faq/start-quiz/daily/${dailyktId}`);
  };

  return (
    <Main colorInvert={true}>
      <Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={{ xs: 200, sm: 300, md: 400 }}
          display={'flex'}
          marginTop={-13}
          paddingTop={13}
          alignItems={'center'}
          id="agency__portfolio-item--js-scroll"
        >
          <Box
            className={'jarallax-img'}
            sx={{
              position: 'absolute',
              objectFit: 'cover',
              /* support for plugin https://github.com/bfred-it/object-fit-images */
              fontFamily: 'object-fit: cover;',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundImage:
                'url(https://ik.imagekit.io/testknow1/BOY%20STUDYING%20ON%20COMPUTER.jpg?updatedAt=1701055317844)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: 1,
              height: 1,
              background: alpha('#161c2d', 0.6),
              zIndex: 1,
            }}
          />
          <Container position={'relative'} zIndex={2}>
            {dailyKT && (
              <>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 400,
                      color: 'common.white',
                      marginBottom: 2,
                    }}
                  >
                    {dailyKT.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'}>
                    {/* <Avatar
              sx={{ width: 60, height: 60, marginRight: 2 }}
              src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
            /> */}
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={`${moment(dailyKT?.createdAt).format(
                        'Do MMM YYYY',
                      )}`}
                      // secondary={'May 19, 2021'}
                      primaryTypographyProps={{
                        sx: { color: alpha('#ffffff', 0.8) },
                      }}
                      // secondaryTypographyProps={{
                      //   sx: { color: alpha('#ffffff', 0.8) },
                      // }}
                    />
                  </Box>
                </Box>
              </>
            )}
          </Container>
        </Box>
        {/* <Hero /> */}
        <Container>
          {dailyKT && (
            <>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
                      <Typography
                        variant="h6"
                        // data-aos={'fade-up'}
                        sx={{
                          fontWeight: 700,
                          marginBottom: 2,
                        }}
                      >
                        Questions generated by AI. Check your knowledge through
                        the assessment:
                      </Typography>
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
                          onClick={handleSubmit}
                        >
                          Start Assessment
                        </Button>
                      </Box>
                      {/* <CopyToClipboardButton {...{ text: dailyKT?.result }} /> */}
                      <br></br>
                      <Typography
                        variant={'subtitle1'}
                        component="span"
                        style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {dailyKT?.result}
                      </Typography>
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
                      <Grid container spacing={2}>
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
                          {dailyKT?.docLink ? (
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                              <div style={{ height: '750px' }}>
                                <Viewer
                                  fileUrl={dailyKT.docLink}
                                  // plugins={[defaultLayoutPluginInstance]}
                                />
                              </div>
                            </Worker>
                          ) : (
                            <>
                              {dailyKT?.paragraph ? (
                                <Typography
                                  variant={'subtitle1'}
                                  component="span"
                                  style={{ whiteSpace: 'pre-wrap' }}
                                >
                                  {dailyKT?.paragraph}
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
                                    href={dailyKT?.url}
                                    rel="noreferrer"
                                  >
                                    {dailyKT.title}
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
                                Source: {dailyKT.source}
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
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        {/* <Container>
          <SimilarStories />
        </Container> */}
        {/* <Container>
          <FooterNewsletter />
        </Container> */}
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

// const DailyKTSingle = () => {
//   let { dailyktId } = useParams();
//   const theme = useTheme();
//   const isMd = useMediaQuery(theme.breakpoints.up('md'), {
//     defaultMatches: true,
//   });

//   return (
//     <Main colorInvert={true}>
//       <Box>
//         <Hero />
//         <Container>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Content />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               {/* {isMd ? ( */}
//               <Box marginBottom={4}>
//                 <SidebarArticles />
//               </Box>
//               {/* ) : null} */}
//               {/* <SidebarNewsletter /> */}
//             </Grid>
//           </Grid>
//         </Container>
//         <Box
//           component={'svg'}
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//           x="0px"
//           y="0px"
//           viewBox="0 0 1920 100.1"
//           sx={{
//             marginBottom: -1,
//             width: 1,
//           }}
//         >
//           <path
//             fill={theme.palette.alternate.main}
//             d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
//           ></path>
//         </Box>
//       </Box>
//       <Box bgcolor={'alternate.main'}>
//         {/* <Container>
//           <SimilarStories />
//         </Container> */}
//         {/* <Container>
//           <FooterNewsletter />
//         </Container> */}
//         <Box
//           component={'svg'}
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//           x="0px"
//           y="0px"
//           viewBox="0 0 1920 100.1"
//           sx={{
//             marginBottom: -1,
//             width: 1,
//           }}
//         >
//           <path
//             fill={theme.palette.background.paper}
//             d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
//           ></path>
//         </Box>
//       </Box>
//     </Main>
//   );
// };

export default DailyKTSingleID;
