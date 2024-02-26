import { Autocomplete, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useValue } from '../../context/ContextProvider';
import { getTextBooks } from '../../actions/textBook';

const CourseSelection = () => {
  const {
    state: { textBooks, filteredTextBooks },
    dispatch,
  } = useValue();
  const [data, setData] = useState([]);
  const [getClassName, setClassName] = useState([]);
  const [getSubjectName, setSubjectName] = useState([]);
  const [getBookName, setBookName] = useState([]);
  const [getChapterName, setChapterName] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json',
  //     )
  //     .then((response) => {
  //       // console.log(response);
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    if (textBooks.length === 0) getTextBooks(dispatch);
  }, []);

  const ClassName = [...new Set(textBooks.map((item) => item.className))];
  // console.log(country);

  // console.log(data);

  const handleClassName = (event, value) => {
    let selectedSubjectNames = textBooks.filter(
      (item) => item.className === value,
    );
    let subjectNames = [
      ...new Set(selectedSubjectNames.map((item) => item.subjectName)),
    ];
    subjectNames.sort();
    dispatch({
      type: 'UPDATE_FILTEREDTEXTBOOKS',
      payload: selectedSubjectNames,
    });
    setSubjectName(subjectNames);
  };
  const handleSubjectName = (event, value) => {
    let selectedBookNames = filteredTextBooks.filter(
      (item) => item.subjectName === value,
    );
    let bookNames = [
      ...new Set(selectedBookNames.map((item) => item.bookName)),
    ];
    bookNames.sort();

    dispatch({ type: 'UPDATE_FILTEREDTEXTBOOKS', payload: selectedBookNames });
    setBookName(bookNames);
  };
  const handleBookName = (event, value) => {
    let selectedChapterNames = filteredTextBooks.filter(
      (item) => item.bookName === value,
    );
    // let bookNames = [
    //   ...new Set(selectedBookNames.map((item) => item.bookName)),
    // ];
    // bookNames.sort();
    // console.log(filteredTextBooks);
    dispatch({
      type: 'UPDATE_FILTEREDTEXTBOOKS',
      payload: selectedChapterNames,
    });

    // setBookName(bookNames);
  };

  return (
    <Container sx={{ m: 1 }}>
      <Autocomplete
        onChange={(event, value) => handleClassName(event, value)}
        id="classname"
        getOptionLabel={(ClassName) => `${ClassName}`}
        options={ClassName}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        noOptionsText={'No Available Data'}
        renderOption={(props, ClassName) => (
          <Box component="li" {...props} key={ClassName} value={getClassName}>
            {ClassName}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Search Class" />}
      />
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
        renderInput={(params) => <TextField {...params} label="Subject Name" />}
      />
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
        renderInput={(params) => <TextField {...params} label="Book Name" />}
      />
    </Container>
  );
};

export default CourseSelection;
