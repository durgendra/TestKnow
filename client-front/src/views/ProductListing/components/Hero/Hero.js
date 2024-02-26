import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const mock = [
  {
    title: 'Faster and More Efficient',
    subtitle:
      'Summary, FAQs and Quiz are created in a matter of seconds, while human-generated Summary, FAQs or Quiz can take hours or even days',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Consistent and Accurate',
    subtitle:
      "ContentAI has the ability to learn and adapt to a document's tone, brand voice, and preferred terminology.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Scalable and Cost-Effective',
    subtitle:
      'With ContentAI, businesses can easily create summary, FAQs or Quiz without burning a hole in pocket.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.alternate.main,
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container>
        <Box>
          <Box
            marginBottom={{ xs: 4, sm: 4 }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography
              variant="h3"
              gutterBottom
              align={'center'}
              sx={{
                fontWeight: 900,
              }}
            >
              Fastest knowledge test on current affairs
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              align={'center'}
              sx={{ marginBottom: 2 }}
            >
              Avoid waiting for days or months for knowledge test papers. Get
              test questions in seconds.
              <br />
              Work well with online news and pdf documents
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/faq"
              endIcon={
                <svg
                  width={16}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              }
            >
              Try for free
            </Button>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box width={1} height={1} data-aos={'fade-up'}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={2}
                      bgcolor={alpha(theme.palette.primary.main, 0.1)}
                      color={theme.palette.primary.main}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                      align={'center'}
                    >
                      {item.title}
                    </Typography>
                    <Typography align={'center'} color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/* <Grid
            container
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-end'}
              xs={4}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img21.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-end'}
              xs={8}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img22.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-start'}
              xs={8}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img24.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              xs={4}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                borderRadius={2}
                src={'https://assets.maccarianagency.com/backgrounds/img25.jpg'}
                alt="..."
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
          </Grid> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
