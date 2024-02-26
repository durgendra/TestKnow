import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from 'components/Container';

const mock = [
  {
    title: 'Free Trial',
    subtitle: 'Try for free | No payment needed',
    price: '₹0',
    priceType: 'week',
    priceTypeSymbol: ' for a week',
    features: [
      'Full Access',
      'Tests using Link',
      'Tests using pdf',
      'Tests using text',
      'Tests using news',
      '5 tests (KT) generation limit',
    ],
    isHighlighted: false,
    startType: 'Start for free',
    formType: '',
  },
  {
    title: 'Pro',
    subtitle: 'For students and teachers',
    price: '₹999',
    priceType: 'monthly',
    priceTypeSymbol: '/month',
    features: [
      'Full Access',
      'Tests using Link',
      'Tests using pdf',
      'Tests using text',
      'Tests using news',
      '500 tests (KT) generation limit',
    ],
    isHighlighted: true,
    startType: 'Buy Now',
    formType: 'rzp_payment_form',
  },
  {
    title: 'Full',
    subtitle: 'For students and teachers',
    price: '₹9,999',
    priceType: 'annual',
    priceTypeSymbol: '/year',
    features: [
      'Full Access',
      'Tests using Link',
      'Tests using pdf',
      'Tests using text',
      'Tests using news',
      '8,000 tests (KT) generation limit (33% higher)',
    ],
    isHighlighted: false,
    startType: 'Buy Now',
    formType: 'rzp_payment_form1',
  },
  {
    title: 'Enterprise',
    subtitle: 'For institutes and schools',
    price: 'Contact us',
    priceType: '',
    priceTypeSymbol: '',
    features: [
      'Full Access',
      'Tests using Link',
      'Tests using pdf',
      'Tests using text',
      'Tests using news',
      'Team Access',
      'Custom KT Limits',
    ],
    isHighlighted: false,
    startType: 'Contact Us',
    formType: '',
  },
];

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  useEffect(() => {
    const rzpPaymentForm = document.getElementById('rzp_payment_form');
    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.dataset.payment_button_id = 'pl_NOYB9GGeea7h8g';
      rzpPaymentForm.appendChild(script);
    }
    const rzpPaymentForm1 = document.getElementById('rzp_payment_form1');
    if (!rzpPaymentForm1.hasChildNodes()) {
      const script1 = document.createElement('script');
      script1.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script1.async = true;
      script1.dataset.payment_button_id = 'pl_NOa0bKzAqt0jUZ';
      rzpPaymentForm1.appendChild(script1);
    }
  });

  // const [pricingOption, setPricingOption] = useState('annual');

  // const handleClick = (event, newPricingOption) => {
  //   setPricingOption(newPricingOption);
  // };

  // const renderToggler = () => (
  //   <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
  //     <ToggleButtonGroup value={pricingOption} exclusive onChange={handleClick}>
  //       <ToggleButton
  //         value="annual"
  //         size={isMd ? 'large' : 'small'}
  //         sx={{
  //           backgroundColor:
  //             pricingOption === 'annual'
  //               ? `${theme.palette.primary.light} !important`
  //               : 'transparent',
  //           border: `1px solid ${theme.palette.primary.main}`,
  //         }}
  //       >
  //         <Typography
  //           variant="subtitle2"
  //           sx={{
  //             fontWeight: 700,
  //             color:
  //               pricingOption === 'annual' ? 'common.white' : 'text.primary',
  //           }}
  //         >
  //           Annual
  //         </Typography>
  //       </ToggleButton>
  //       <ToggleButton
  //         value="monthly"
  //         size={isMd ? 'large' : 'small'}
  //         sx={{
  //           backgroundColor:
  //             pricingOption === 'monthly'
  //               ? `${theme.palette.primary.light} !important`
  //               : 'transparent',
  //           border: `1px solid ${theme.palette.primary.main}`,
  //         }}
  //       >
  //         <Typography
  //           variant="subtitle2"
  //           sx={{
  //             fontWeight: 700,
  //             color:
  //               pricingOption !== 'annual' ? 'common.white' : 'text.primary',
  //           }}
  //         >
  //           Monthly
  //         </Typography>
  //       </ToggleButton>
  //     </ToggleButtonGroup>
  //   </Box>
  // );

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
          marginTop: -13,
          paddingTop: 1,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900,
                }}
              >
                Flexible pricing options
              </Typography>
              {/* <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
              >
                We are founded by a leading academic and researcher in the field
                of Industrial Systems Engineering.
                <br />
                For entrepreneurs, startups and freelancers. If you didn’t find
                what you needed, these could help!
              </Typography> */}
            </Box>
            {/* {renderToggler()} */}
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Box
                component={Card}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                variant={'outlined'}
                sx={{
                  // `backgroundColor: item.isHighlighted
                  //   ? `${theme.palette.primary.light} !important`
                  //   : 'transparent',`
                  border: item.isHighlighted
                    ? `1px solid ${theme.palette.primary.main}`
                    : '',
                }}
              >
                <CardContent
                  sx={{
                    padding: 4,
                  }}
                >
                  <Box marginBottom={2}>
                    <Typography variant={'h4'} fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color={'text.secondary'}>
                      {item.subtitle}
                    </Typography>
                  </Box>
                  <Box
                    display={'flex'}
                    alignItems={'baseline'}
                    marginBottom={2}
                  >
                    <Typography variant={'h3'} fontWeight={700}>
                      {/* {pricingOption === 'annual' */}
                      {item.price}
                    </Typography>
                    <Typography
                      variant={'subtitle1'}
                      color={'text.secondary'}
                      fontWeight={700}
                    >
                      {item.priceTypeSymbol}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {item.features.map((feature, j) => (
                      <Grid item xs={12} key={j}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={'auto'}
                          padding={0}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={'auto !important'}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={theme.palette.primary.main}
                              width={20}
                              height={20}
                            >
                              <svg
                                width={12}
                                height={12}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <ListItemText primary={feature} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                  {i == 0 && (
                    <Button size={'large'} variant={'contained'} href="/faq">
                      {item.startType}
                    </Button>
                  )}
                  {i == 1 && <form id="rzp_payment_form"></form>}
                  {i == 2 && <form id="rzp_payment_form1"></form>}
                  {i == 3 && (
                    <Button
                      size={'large'}
                      variant={'contained'}
                      onClick={(e) => {
                        window.location.href = 'mailto:example@gmail.com';
                        e.preventDefault();
                      }}
                    >
                      {item.startType}
                    </Button>
                  )}
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
