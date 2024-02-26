import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Autocomplete, Container, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
// import { getTextBooks } from '../../../../actions/textBook';
import { getUploadedDocAPI } from '../../../actions/faq';
import { useValue } from '../../../context/ContextProvider';
import timeDifference from '../../../utils/DateTime';
import { useNavigate } from 'react-router-dom';

export const mock = [
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
    team: 'Consumer',
    subtitle: 'Responsible for design systems and brand management.',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our apps.',
  },
  {
    title: 'UX/UI Designer',
    location: 'Yerevan',
    type: 'Part time',
    team: 'Internal tools',
    subtitle: 'Help us make the best decisions with qualitative experiments.',
  },
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
    team: 'Internal tools',
    subtitle: 'Responsible for design systems and brand management.',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our apps.',
  },
  {
    title: 'UX/UI Designer',
    location: 'Yerevan',
    type: 'Part time',
    team: 'Consumer',
    subtitle: 'Help us make the best decisions with qualitative experiments.',
  },
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
    team: 'Consumer',
    subtitle: 'Responsible for design systems and brand management.',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our apps.',
  },
];

const UploadedDoc = () => {
  const theme = useTheme();
  const {
    state: { currentUser },
    dispatch,
  } = useValue();
  const [uploadedDocs, setUploadedDocs] = useState();

  useEffect(() => {
    async function getUploadedDoc(currentUser) {
      try {
        const data = await getUploadedDocAPI(currentUser);
        // console.log(data);
        setUploadedDocs(data);
        // console.log(testQuestions);
      } catch (err) {
        console.log('Error occured when fetching previously uploaded Docs');
      }
    }
    getUploadedDoc(currentUser);
    // console.log(uploadedDocs);
    // if (textBooks.length === 0) getTextBooks(dispatch);
  }, []);

  const navigate = useNavigate();
  const handleNext = (item) => {
    const data2 = { item: item };
    // const product = {
    //   paragraph: '',
    //   category: 'doc',
    //   resultAI: '',
    //   pLink: item.docLink,
    // };
    // createQuiz(product, currentUser, dispatch, 0);
    // navigate('/faq/quiz-result');
    navigate('/faq/select-page-doc', { state: data2 });
    // createQuizTextBook(optionMore, currentUser, dispatch, 0);
  };
  return (
    <Box>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        flex={'1 1 100%'}
        justifyContent={{ sm: 'space-between' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        marginY={4}
      >
        <Box marginBottom={{ xs: 1, sm: 0 }}>
          <Typography variant={'h6'} fontWeight={700}>
            Select a document
          </Typography>
          <Typography color={'text.secondary'}>
            List of Previously uploaded document
          </Typography>
        </Box>
        {uploadedDocs && (
          <>
            <Box
              paddingY={1 / 2}
              paddingX={1}
              bgcolor={'secondary.main'}
              borderRadius={2}
              marginRight={1}
            >
              <Typography
                variant={'caption'}
                fontWeight={700}
                sx={{ color: 'common.black' }}
              >
                {uploadedDocs?.length} documents
              </Typography>
            </Box>
          </>
        )}
      </Box>
      {uploadedDocs && (
        <>
          <Grid
            container
            sx={{
              background: theme.palette.background.paper,
              borderRadius: 2,
            }}
          >
            {uploadedDocs.map((item, i) => (
              <Grid
                item
                xs={12}
                key={i}
                sx={{
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  '&:last-child': {
                    borderBottom: 0,
                  },
                }}
              >
                <Box padding={2} display={'flex'} alignItems={'center'}>
                  <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    flex={'1 1 0'}
                    justifyContent={{ sm: 'space-between' }}
                    alignItems={{ sm: 'center' }}
                  >
                    <Box marginBottom={{ xs: 1, sm: 0 }}>
                      <Typography variant={'subtitle1'} fontWeight={700}>
                        {item.docName}
                      </Typography>
                      <Typography color="text.secondary">
                        Uploaded {timeDifference(Date.parse(item.createdAt))}
                      </Typography>

                      {/* <br></br>
                  <Autocomplete
                    onChange={(event, value) => handlePageNumber(event, value)}
                    id="pageNumber"
                    getOptionLabel={(getPages) => `${getPages}`}
                    options={getPages}
                    renderOption={(props, getPages) => (
                      <Box component="li" {...props} key={getPages}>
                        {getPages}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Page" />
                    )}
                    sx={{
                      width: {
                        xs: '150px',
                        sm: '200px',
                      },
                    }}
                  /> */}
                    </Box>
                    {/* <Typography color={'text.secondary'}>
                  {`${item.team} / ${item.location}`}
                </Typography> */}
                  </Box>
                  <Box
                    marginLeft={2}
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    // flex={'1 1 100%'}
                    // justifyContent={{ sm: 'space-between' }}
                    // alignItems={{ xs: 'flex-start', sm: 'center' }}
                  >
                    {/* <Button
                  onClick={() => handleFAQ(item)}
                  variant="text"
                  color="secondary"
                  size="small"
                  // endIcon={
                  //   <Box
                  //     component={'svg'}
                  //     xmlns="http://www.w3.org/2000/svg"
                  //     viewBox="0 0 20 20"
                  //     fill="currentColor"
                  //     width={12}
                  //     height={12}
                  //   >
                  //     <path
                  //       fillRule="evenodd"
                  //       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  //       clipRule="evenodd"
                  //     />
                  //   </Box>
                  // }
                >
                  Short Questions
                </Button> */}
                    <Button
                      onClick={() => handleNext(item)}
                      variant="outlined"
                      color="primary"
                      size="small"
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={12}
                          height={12}
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </Box>
                      }
                    >
                      Select
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default UploadedDoc;
