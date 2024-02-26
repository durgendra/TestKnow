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
import { useValue } from '../../../../context/ContextProvider';
import { getTextBooks } from '../../../../actions/textBook';
import { createFAQ, createQuiz } from '../../../../actions/faq';
import { useNavigate } from 'react-router-dom';

const SelectTextBook = () => {
  const theme = useTheme();
  const {
    state: { currentUser, textBooks, filteredTextBooks, selectedTextBooks },
    dispatch,
  } = useValue();
  const [data, setData] = useState([]);
  const [getClassName, setClassName] = useState([]);
  const [getSubjectName, setSubjectName] = useState([]);
  const [getBookName, setBookName] = useState([]);
  const [getSelectedClass, setSelectedClass] = useState('');
  const [getSelectedSubject, setSelectedSubject] = useState('');
  const [getSelectedBook, setSelectedBook] = useState('');
  let selectedBooks = [];
  const [getPages, setPages] = useState([1]);
  const pageNumbers = 10;
  useEffect(() => {
    if (pageNumbers) {
      setPages(Array.from({ length: pageNumbers }, (_, i) => i + 1));
    } else {
      console.log('Subsequent Render');
    }
  }, [pageNumbers]);
  const handlePageNumber = (event, value) => {
    dispatch({
      type: 'UPDATE_PAGENUMBER',
      payload: value,
    });
  };

  useEffect(() => {
    if (textBooks.length === 0) getTextBooks(dispatch);
  }, []);

  const ClassName = [...new Set(textBooks.map((item) => item.className))];

  const handleClassName = (event, value) => {
    let selectedSubjectNames = textBooks.filter(
      (item) => item.className === value,
    );
    setSelectedClass(value);
    let subjectNames = [
      ...new Set(selectedSubjectNames.map((item) => item.subjectName)),
    ];
    subjectNames.sort();
    setSubjectName(subjectNames);
  };
  const handleSubjectName = (event, value) => {
    let selectedClass = getSelectedClass;
    let selectedBookNames = textBooks.filter(
      (item) => item.className === selectedClass && item.subjectName === value,
    );
    setSelectedSubject(value);
    let bookNames = [
      ...new Set(selectedBookNames.map((item) => item.bookName)),
    ];
    bookNames.sort();
    setBookName(bookNames);
  };
  const handleBookName = (event, value) => {
    let selectedClass = getSelectedClass;
    let selectedSubject = getSelectedSubject;
    let selectedChapterNames = textBooks.filter(
      (item) =>
        item.className === selectedClass &&
        item.subjectName === selectedSubject &&
        item.bookName === value,
    );
    dispatch({
      type: 'UPDATE_SELECTEDTEXTBOOKS',
      payload: selectedChapterNames,
    });
  };
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
    navigate('/faq/select-page', { state: data2 });
    // createQuizTextBook(optionMore, currentUser, dispatch, 0);
  };
  const handleFAQ = (item) => {
    const product = {
      paragraph: '',
      category: 'doc',
      resultAI: '',
      pLink: item.docLink,
    };
    createFAQ(product, currentUser, dispatch, 0);
    navigate('/faq/faq-result');
  };
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          color={'text.secondary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          Create Knowledge Test
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Select Book and Chapter
        </Typography>
        <Typography
          align={'center'}
          color={'text.secondary'}
          // sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          We are still in process of providing list of more textbooks. If you
          are looking for a textbook which you couldn't find it here. Please
          email us through the Contact us page
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          '.MuiOutlinedInput-root': {
            background: theme.palette.background.paper,
          },
        }}
      >
        <Grid item xs={12} md={4}>
          <Autocomplete
            onChange={(event, value) => handleClassName(event, value)}
            id="classname"
            getOptionLabel={(ClassName) => `${ClassName}`}
            options={ClassName}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={'No Available Data'}
            renderOption={(props, ClassName) => (
              <Box
                component="li"
                {...props}
                key={ClassName}
                value={getClassName}
              >
                {ClassName}
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Select Class" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Autocomplete
            onChange={(event, value) => handleSubjectName(event, value)}
            id="subjectname"
            getOptionLabel={(getSubjectName) => `${getSubjectName}`}
            options={getSubjectName}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={'No Available Subject'}
            renderOption={(props, getSubjectName) => (
              <Box component="li" {...props} key={getSubjectName}>
                {getSubjectName}
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Subject Name" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Autocomplete
            onChange={(event, value) => handleBookName(event, value)}
            id="bookName"
            getOptionLabel={(getBookName) => `${getBookName}`}
            options={getBookName}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={'No Available Books'}
            renderOption={(props, getBookName) => (
              <Box component="li" {...props} key={getBookName}>
                {getBookName}
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Book Name" />
            )}
          />
        </Grid>
      </Grid>
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
            List of Chapters
          </Typography>
          <Typography color={'text.secondary'}>
            Select chapter to create the knowledge test
          </Typography>
        </Box>
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
            {selectedTextBooks?.length} chapters
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        {selectedTextBooks?.map((item, i) => (
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
                    Chapter: {item.chapterNumber}
                  </Typography>
                  <Typography color={'text.secondary'}>
                    {item.chapterName}
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
    </Box>
  );
};

export default SelectTextBook;
