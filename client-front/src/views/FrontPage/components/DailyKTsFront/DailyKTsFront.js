import {
  Avatar,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { useValue } from '../../../../main/context/ContextProvider';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { StarBorder } from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import Main from 'layouts/Main';
import { getDailyKTs } from 'main/actions/dailyKT';
import CardMedia from '@mui/material/CardMedia';

import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const DailyKTsFront = () => {
  const {
    state: { filtereddailyKTs },
    dispatch,
  } = useValue();
  const theme = useTheme();
  useEffect(() => {
    if (filtereddailyKTs.length === 0) getDailyKTs(dispatch);
  }, []);
  const navigate = useNavigate();

  return (
    <Container>
      <Box marginBottom={4}>
        <Box
          display={'flex'}
          // justifyContent={'space-between'}
          // alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent={'center'}
          alignItems={{ xs: 'center', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          marginBottom={4}
          marginTop={2}
        >
          <Box>
            <Typography fontWeight={700} variant={'h4'} gutterBottom>
              Didn't believe it? Check these AI generated quiz
            </Typography>
            <Typography color={'text.secondary'}>
              Check your knowledge on these topics through an assessment
            </Typography>
          </Box>
          {/* <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
              <Box
                component={Button}
                variant="outlined"
                color="primary"
                size="large"
                marginLeft={2}
              >
                View all
              </Box>
            </Box> */}
        </Box>
        <Grid container spacing={4}>
          {filtereddailyKTs.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={Button}
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                    backgroundColor: `primary.main`,
                  },
                }}
                onClick={() => {
                  // dispatch({ type: 'UPDATE_DAILYKT', payload: item });
                  // console.log(dailyKT);
                  // navigate('/dailykt');
                  navigate(`/dailyktnew/${item._id}`);
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  boxShadow={4}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{
                    backgroundImage: 'none',
                    border: 1,
                    borderColor: 'primary.main',
                  }}
                >
                  <Box padding={2} display={'flex'} flexDirection={'column'}>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      {/* <Box display={'flex'} alignItems={'center'}>
                          <Avatar src={item.uPhoto} sx={{ marginRight: 1 }} />
                          <Typography color={'text.secondary'}>
                            Source: {item.source}
                          </Typography>
                        </Box> */}
                      {/* <Typography color={'text.secondary'}>
                        {`${moment(item?.createdAt).format('Do MMM')}`}
                      </Typography> */}
                      <Typography color={'text.secondary'}>
                        {`${moment(item?.createdAt).format('Do MMM')}`}
                      </Typography>
                    </Box>
                    <Box marginBottom={1}>
                      <Divider />
                    </Box>
                  </Box>
                  <CardMedia
                    // image={item.image}
                    title={item.title}
                    sx={{
                      height: { xs: 20, md: 30 },
                      position: 'relative',
                    }}
                    component="div"
                  ></CardMedia>
                  <Box component={CardContent} position={'relative'}>
                    <Typography variant={'h6'} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.paragraph.length > 70
                        ? item.paragraph.substring(0, 69) + '...'
                        : item.paragraph}
                    </Typography>
                  </Box>

                  <Box flexGrow={1} />
                  <Box padding={2} display={'flex'} flexDirection={'column'}>
                    <Box marginBottom={1}>
                      <Divider />
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box display={'flex'} alignItems={'center'}>
                        {/* <Avatar src={item.uPhoto} sx={{ marginRight: 1 }} /> */}
                        <Typography color={'text.secondary'}>
                          Source: {item.source}
                        </Typography>
                      </Box>
                      {/* <Typography color={'text.secondary'}>
                            Source: {item.source}
                          </Typography> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DailyKTsFront;
