import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {
  Partners,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
  Hero,
  Contact,
  Pricing,
  Description,
  Story,
  DailyKTsFront,
} from './components';
import PricingFront from '../PricingMain/PricingFront';

const FrontPage = () => {
  const theme = useTheme();

  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Box bgcolor={'primary.main'}>
        <Container>
          <Description />
        </Container>
      </Box>
      <Container>
        <Story />
      </Container>
      <Container>
        <CaseStudy1 />
      </Container>
      <Container paddingY={'0 !important'}>
        <CaseStudy2 />
      </Container>
      <Container>
        <CaseStudy3 />
      </Container>
      <Divider></Divider>
      <Container>
        <DailyKTsFront />
      </Container>
      <Container>
        <PricingFront />
        {/* <Box
          component={Button}
          href="/pricing"
          color="primary"
          size="large"
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          // fullWidth={isMd ? false : true}
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
        >
          See more pricing options here
        </Box> */}
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      ></Box>
    </Main>
  );
};

export default FrontPage;
