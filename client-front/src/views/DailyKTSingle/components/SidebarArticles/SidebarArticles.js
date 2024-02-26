import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ImageList, ImageListItem } from '@mui/material';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useValue } from '../../../../main/context/ContextProvider';
import Link from '@mui/material/Link';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// const defaultLayoutPluginInstance = defaultLayoutPlugin();

const SidebarArticles = () => {
  const theme = useTheme();
  const {
    state: { dailyKT },
    dispatch,
  } = useValue();
  return (
    <Box component={Card} variant={'outlined'} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Knowledge test is based on the following
      </Typography>
      <Grid container spacing={2}>
        <Box
          component={Card}
          width={1}
          height={1}
          boxShadow={0}
          borderRadius={0}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'column' }}
          sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
        >
          {dailyKT?.docLink ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <div style={{ height: '750px' }}>
                <Viewer
                  fileUrl={dailyKT.docLink}
                  // plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            </Worker>
          ) : (
            <>
              {dailyKT?.paragraph ? (
                <Typography
                  variant={'subtitle1'}
                  component="span"
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {dailyKT?.paragraph}
                </Typography>
              ) : (
                <CardContent
                  sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
                >
                  <Link target="_blank" href={dailyKT?.url} rel="noreferrer">
                    {dailyKT.title}
                  </Link>
                  {/* <Typography fontWeight={400}>
                    Article Link: {dailyKT?.url}
                  </Typography> */}
                  {/* <Box marginY={1 / 4}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    Source: {dailyKT.source}
                  </Typography>
                </Box> */}
                </CardContent>
              )}
            </>
          )}
          {/* <Box
            sx={{
              width: { xs: 1, md: '100%' },
            }}
          >
            <ImageList
              rowHeight={250}
              sx={{
                '&.MuiImageList-root': {
                  gridTemplateColumns:
                    'repeat(auto-fill, minmax(250px, 1fr))!important',
                },
              }}
            >
              <ImageListItem key="new" cols={1} rows={1}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer fileUrl={dailyKT.docLink} />
                </Worker>
              </ImageListItem>
            </ImageList>
            {/* <Box
                  component={'img'}
                  loading="lazy"
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 120,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                /> */}
          {/* </Box> */}
          <CardContent
            sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
          >
            {/* <Typography fontWeight={700}>{dailyKT.title}</Typography> */}
            <Box marginY={1 / 4}>
              <Typography
                variant={'caption'}
                color={'text.secondary'}
                component={'i'}
              >
                Source: {dailyKT.source}
              </Typography>
            </Box>
            {/* <Button
              size={'small'}
              target="_blank"
              rel="noreferrer"
              href={dailyKT.url}
            >
              More
            </Button> */}
          </CardContent>
        </Box>
      </Grid>
    </Box>
  );
};

export default SidebarArticles;
