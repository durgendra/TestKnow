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
import CopyToClipboardButton from 'main/components/common/CopyToClipboard';

const FAQResultsView = () => {
  const {
    state: { product, currentUser },
    dispatch,
  } = useValue();
  const theme = useTheme();
  const navigate = useNavigate();
  const handleSubmitKeywords = (keyword) => {
    const keywordNew = { keyword: keyword, resultAI: '' };
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
            Knowledge Test (Short questions)
          </Typography>
        </Box>
        {/* {product && product?.resultAI && (
          <>
            <Box
              display="flex"
              marginTop={{ xs: 2, md: 0 }}
              flexDirection={{ xs: 'row', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Button
                color="primary"
                variant="outlined"
                sx={{ m: 4 }}
                marginLeft={2}
                // endIcon={<Send />}
                // disabled={!showSubmit}
                onClick={() => {
                  navigator.clipboard.writeText(product?.resultAI);
                }}
              >
                Copy the Quiz
              </Button>
            </Box>
          </>
        )} */}
      </Box>
      {product && product?.resultAI && (
        <>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
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
                <CopyToClipboardButton {...{ text: product?.resultAI }} />
                <Box p={1}>
                  <Typography
                    component="span"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {product?.resultAI}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={4}>
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
                  <Typography
                    component="span"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {product?.keywords}
                  </Typography>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default FAQResultsView;
