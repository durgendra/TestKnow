import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Faq,
  Plans,
  Support,
  PricingCompareTable,
  Pricing,
  FreePricing,
  PaidPricing,
} from './components';

import PricingSub from './PricingSub';

const PricingMain = () => {
  const theme = useTheme();

  return (
    // <Main>
    //   {/* <MainSection /> */}
    //   <Container>
    //     <Box>
    //       <Container>
    //         <FreePricing />
    //       </Container>
    //       <Container>
    //         <PaidPricing />
    //       </Container>
    //       <Container>
    //         <Support />
    //       </Container>
    //     </Box>
    //   </Container>
    // </Main>
    <Main>
      <PricingSub />
    </Main>
  );
};

export default PricingMain;
