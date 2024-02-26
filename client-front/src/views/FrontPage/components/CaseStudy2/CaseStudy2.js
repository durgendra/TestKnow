import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const CaseStudy2 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.red[50] : colors.red[900]
      }
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            height={1}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                For Teachers and Training Professionals
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                Save time and effort in creating post-lesson knowledge test and
                exam quiz for students.
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              boxShadow={0}
              borderRadius={2}
            >
              {/* <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={
                    'https://assets.maccarianagency.com/svg/logos/netflix-original.svg'
                  }
                  alt="..."
                  maxWidth={80}
                  marginBottom={2}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
                <Typography component={'p'}>
                  First class templates. These guys know what they're doing:
                  great code quality, clear naming conventions and clear code
                  structure. Plain awesome and a pleasure to work with.
                </Typography>
                <Box marginTop={{ xs: 2, sm: 4 }}>
                  <Typography variant={'subtitle1'} sx={{ fontWeight: 700 }}>
                    Jhon Anderson
                  </Typography>
                  <Typography color="text.secondary">MUI lover</Typography>
                </Box>
              </CardContent> */}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12}>
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                src={
                  'https://ik.imagekit.io/testknow1/testknow-2%20chapters%20quiz.svg?updatedAt=1700881500752'
                }
                alt="..."
                borderRadius={2}
                maxWidth={1}
                maxHeight={400}
                sx={{
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Save time
              </Typography>
              <Typography component={'p'}>
                Create instant post-lesson knowledge test for students. No need
                to spend hours
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Become a rock-star teacher
              </Typography>
              <Typography component={'p'}>
                Your students will love you for your regular post-lesson
                knowledge test
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudy2;
