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
    title: 'Pro',
    subtitle: 'Try for free before any payment',
    price: { monthly: '$2.99', annual: '$29.99' },
    priceForm: {
      monthly: 'rzp_payment_form1',
      annual: 'rzp_payment_form10',
    },
    features: [
      'Full Access',
      'Tests using Link',
      'Tests using pdf',
      'Tests using texts',
      '50 tests per month generation limit',
    ],
    isHighlighted: true,
  },
  {
    title: 'Complete',
    subtitle: 'For teams and advanced developers',
    price: { monthly: '$5.99', annual: '$59.99' },
    priceForm: {
      monthly: 'rzp_payment_form2',
      annual: 'rzp_payment_form20',
    },
    features: [
      'Full Access',
      'Tests using Link',
      'Tests using pdf',
      'Tests using texts',
      'Tests using news articles',
      'Tests using Textbooks',
      '200 tests per month generation limit',
    ],
    isHighlighted: false,
  },
  // {
  //   title: 'Enterprise',
  //   subtitle: 'Ideal for corporate companyes',
  //   price: { monthly: '$77', annual: '$690' },
  //   features: [
  //     'All features',
  //     'Email support',
  //     'Google Ads',
  //     'SSO via Google',
  //     'API access',
  //     'Facebook Ads',
  //   ],
  //   isHighlighted: false,
  // },
];

const PaidPricingUS = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // const [isToggled, setToggle] = useState(false);

  const [pricingOption, setPricingOption] = useState('monthly');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
    // console.log(pricingOption);
  };

  // const handleClick = (event, newPricingOption) => {
  //   setToggle(!isToggled);
  //   isToggled ? setPricingOption('annual') : setPricingOption('monthly');
  //   console.log(pricingOption);
  //   // console.log(newPricingOption);
  //   // if (newPricingOption === 'monthly') {
  //   //   setPricingOption('monthly');
  //   // } else {
  //   //   setPricingOption('annual');
  //   // }
  //   // console.log(pricingOption);

  //   if (pricingOption === 'annual') {
  //     // console.log(pricingOption);
  //     const rzpPaymentForm10 = document.getElementById('rzp_payment_form10');
  //     const rzpPaymentForm20 = document.getElementById('rzp_payment_form20');
  //     if (!rzpPaymentForm10.hasChildNodes()) {
  //       console.log(rzpPaymentForm10);
  //       const script10 = document.createElement('script');
  //       script10.src = 'https://checkout.razorpay.com/v1/payment-button.js';
  //       script10.async = true;
  //       script10.dataset.payment_button_id = 'pl_NUKeHcfozLWXRk';
  //       rzpPaymentForm10.appendChild(script10);
  //     }

  //     if (!rzpPaymentForm20.hasChildNodes()) {
  //       console.log(rzpPaymentForm20);
  //       const script20 = document.createElement('script');
  //       script20.src = 'https://checkout.razorpay.com/v1/payment-button.js';
  //       script20.async = true;
  //       script20.dataset.payment_button_id = 'pl_NUKfUqSNriOeYl';
  //       rzpPaymentForm20.appendChild(script20);
  //     }
  //   } else {
  //     // console.log(pricingOption);
  //     const rzpPaymentForm1 = document.getElementById('rzp_payment_form1');
  //     const rzpPaymentForm2 = document.getElementById('rzp_payment_form2');

  //     if (!rzpPaymentForm1.hasChildNodes()) {
  //       console.log(rzpPaymentForm1);
  //       const script1 = document.createElement('script');
  //       script1.src = 'https://checkout.razorpay.com/v1/payment-button.js';
  //       script1.async = true;
  //       script1.dataset.payment_button_id = 'pl_NOYB9GGeea7h8g';
  //       rzpPaymentForm1.appendChild(script1);
  //     }
  //     if (!rzpPaymentForm2.hasChildNodes()) {
  //       console.log(rzpPaymentForm2);
  //       const script2 = document.createElement('script');
  //       script2.src = 'https://checkout.razorpay.com/v1/payment-button.js';
  //       script2.async = true;
  //       script2.dataset.payment_button_id = 'pl_NOa0bKzAqt0jUZ';
  //       rzpPaymentForm2.appendChild(script2);
  //     }
  //   }
  // };

  const renderToggler = () => (
    <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
      <ToggleButtonGroup value={pricingOption} exclusive onChange={handleClick}>
        <ToggleButton
          value="annual"
          size={isMd ? 'large' : 'small'}
          sx={{
            backgroundColor:
              pricingOption === 'annual'
                ? `${theme.palette.primary.light} !important`
                : 'transparent',
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color:
                pricingOption === 'annual' ? 'common.white' : 'text.primary',
            }}
          >
            Annual
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="monthly"
          size={isMd ? 'large' : 'small'}
          sx={{
            backgroundColor:
              pricingOption === 'monthly'
                ? `${theme.palette.primary.light} !important`
                : 'transparent',
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color:
                pricingOption !== 'annual' ? 'common.white' : 'text.primary',
            }}
          >
            Monthly
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );

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
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
              >
                {/* <br /> */}
                For Students, Teachers, Schools and Coaching institutes. If you
                didn’t find what you needed, please contact us!
              </Typography>
            </Box>
            {/* {renderToggler()} */}
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                component={Card}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                variant={'outlined'}
                sx={{
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
                      {pricingOption === 'annual'
                        ? item.price.annual
                        : item.price.monthly}
                    </Typography>
                    <Typography
                      variant={'subtitle1'}
                      color={'text.secondary'}
                      fontWeight={700}
                    >
                      {pricingOption === 'annual' ? '/y' : '/mo'}
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
                  <Button
                    size={'large'}
                    variant={'contained'}
                    onClick={(e) => {
                      window.location.href = 'mailto:example@gmail.com';
                      e.preventDefault();
                    }}
                  >
                    Contact us
                  </Button>
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PaidPricingUS;
