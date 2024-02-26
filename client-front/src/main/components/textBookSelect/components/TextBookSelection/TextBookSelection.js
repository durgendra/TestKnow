import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Stack } from '@mui/material';
import { Send } from '@mui/icons-material';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import { useValue } from '../../../../context/ContextProvider';
import { createQuiz } from '../../../../actions/faq';
import { useNavigate } from 'react-router-dom';
import CourseSelection from 'main/components/common/CourseSelection';

const TextBookSelection = () => {
  const {
    state: { currentUser, product, filteredTextBooks },
    dispatch,
  } = useValue();
  const theme = useTheme();
  const navigate = useNavigate();
  // const handleSubmit = () => {
  //   const optionMore = {
  //     objectId: product._id,
  //   };
  //   // // createOptions(product, currentUser, dispatch, 0);
  //   createQuiz(optionMore, currentUser, dispatch, 0);
  //   navigate('/faq/standardquiz');
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
            Last Step: Select Page to create Knowledge Test
          </Typography>
          <Typography color={'text.secondary'}>
            The Chapter has multiple pages. Please select a page to create the
            Knowledge test
          </Typography>
        </Box>
        <Box
          display="flex"
          marginTop={{ xs: 2, md: 0 }}
          flexDirection={{ xs: 'row', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        ></Box>
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
            <Box sx={{ pb: 7, px: 1 }}>
              <CourseSelection />
              <Stack sx={{ alignItems: 'center' }}>
                {/* <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                  marginTop={2}
                >
                  <Button
                    variant="contained"
                    sx={{ m: 4 }}
                    endIcon={<Send />}
                    // disabled={!showSubmit}
                    onClick={handleSubmit}
                  >
                    Summary
                  </Button>
                </Box> */}
              </Stack>
            </Box>
          </Box>
        </Grid>
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
            >
              <Typography variant="h6" component="span">
                {'Chapters'}
              </Typography>
            </Box>
            {filteredTextBooks?.map((item, i) => (
              <Grid item xs={12} key={i}>
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  borderRadius={0}
                  boxShadow={0}
                  display={'flex'}
                  flexDirection={{ xs: 'column', md: 'row' }}
                  sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
                >
                  {/* <Box
                    sx={{
                      width: { xs: 1, md: '30%' },
                    }}
                  > */}
                  {/* <Box
                  component={'img'}
                  loading="lazy"
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 200,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                /> */}
                  {/* </Box> */}
                  <CardContent
                    sx={{
                      width: { xs: 1, md: '70%' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      fontWeight={700}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      {item.chapterName}
                    </Typography>
                    <Box marginY={1}>
                      <Typography
                        variant={'caption'}
                        color={'text.secondary'}
                        component={'i'}
                      >
                        {item.Source}
                      </Typography>
                    </Box>

                    <Typography
                      color="text.secondary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {item.publicURL}
                    </Typography>
                    <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'flex-end'}
                    >
                      <Button
                        endIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </Box>
                        }
                      >
                        Read More
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextBookSelection;
