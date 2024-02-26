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

const mock1 = [
  {
    title: 'Full Access for a week ',
    features: [
      'AI generated Tests using Link',
      'Tests using pdf',
      'Tests using text',
      'Tests using news',
      '5 tests generation limit',
    ],
  },
  // {
  //   title: 'Free forever with limited features ',
  //   features: [
  //     'AI generated Tests using texts',
  //     '10 tests per month generation limit',
  //   ],
  // },
];

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
                Start with Free Trial
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
              >
                {/* <br /> */}
                No Payment needed
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {/* {mock.map((item, i) => ( */}
          <Grid item xs={12} md={12} key={1}>
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
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <CardContent
                sx={{
                  padding: 4,
                }}
              >
                <Box marginBottom={2}>
                  <Typography variant={'h4'} fontWeight={600} gutterBottom>
                    Free Plan
                  </Typography>
                  <Typography color={'text.secondary'}>
                    Free trial of all features for a week | No payment needed
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'baseline'} marginBottom={2}>
                  {/* <Typography variant={'h3'} fontWeight={700}>
                    ₹0
                  </Typography> */}
                </Box>
                <Grid container spacing={1}>
                  {mock1.map((item, i) => (
                    <Grid item xs={12} md={12} key={i}>
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
                          border: `1px solid ${theme.palette.secondary.main}`,
                        }}
                      >
                        <CardContent
                          sx={{
                            padding: 4,
                          }}
                        >
                          <Box marginBottom={2}>
                            <Typography
                              variant={'h4'}
                              fontWeight={600}
                              gutterBottom
                            >
                              {item.title}
                            </Typography>
                            <Typography color={'text.secondary'}>
                              {item.title}
                            </Typography>
                          </Box>

                          <Grid container spacing={1}>
                            {item.features.map((feature, j) => (
                              <Grid item xs={12} md={6} key={j}>
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
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              {/* <Box flexGrow={1} /> */}
              <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <Button size={'large'} variant={'contained'} href="/faq">
                  Try now for free
                </Button>
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
