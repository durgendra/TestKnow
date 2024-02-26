import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import { useValue } from '../../../../context/ContextProvider';
import { createKnowledge } from '../../../../actions/faq';
import { useNavigate } from 'react-router-dom';
// import KeywordInfo from '../../KeywordInfo';

const KeywordInfoView = () => {
  const {
    state: { keywordInfo, product, currentUser },
    dispatch,
  } = useValue();
  const theme = useTheme();
  const navigate = useNavigate();
  const handleSubmitKeywords = (keyword) => {
    const keywordNew = { keyword: keyword };
    createKnowledge(keywordNew, currentUser, dispatch);
    navigate('/faq/knowledge-result');
  };
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
            Here are further details on keyword: {keywordInfo?.keyword}
          </Typography>
        </Box>
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
            href={'/faq/news'}
          >
            Search in News
          </Button>
          <Button
            color="primary"
            variant="outlined"
            sx={{ m: 4 }}
            marginLeft={2}
            // endIcon={<Send />}
            // disabled={!showSubmit}
            href={'/faq'}
          >
            Create knowledge test
          </Button>
          {/* </Box> */}
        </Box>
      </Box>
      {keywordInfo && keywordInfo?.resultAI && (
        <>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
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
                <Box p={1}>
                  <Typography
                    component="span"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {keywordInfo?.resultAI}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
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
                  <Typography fontWeight={600} variant={'h6'} gutterBottom>
                    Learn More
                  </Typography>
                </Box>
                <Box p={1}>
                  <>
                    {product?.keywords.map((keyword) => {
                      return (
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ m: 0.5 }}
                          onClick={() => handleSubmitKeywords(keyword)}
                        >
                          {keyword}
                        </Button>
                      );
                    })}
                  </>
                  {/* <Typography
                    component="span"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {product?.keywords}
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default KeywordInfoView;
