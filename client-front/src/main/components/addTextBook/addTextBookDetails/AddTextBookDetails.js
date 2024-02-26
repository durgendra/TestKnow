import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import { useValue } from '../../../context/ContextProvider';
import InfoField from './InfoField';
import InfoFieldLite from './InfoFieldLite';
import InfoFieldURL from './InfoFieldURL';
import AddDocs from './addDocs/AddDocs';
import ResultField from './ResultField';
import SourceField from './SourceField';
import InfoFieldNumber from './InfoFieldNumber';

const AddTextBookDetails = () => {
  const {
    state: {
      detailsTextBook: {
        className,
        subjectName,
        bookName,
        chapterNumber,
        chapterName,
        totalPageNumber,
        url,
        source,
      },
    },
    dispatch,
  } = useValue();

  // const handleCategoryTypeChange = (e) => {
  //   const categoryType = Number(e.target.value);
  //   setCategoryType(categoryType);
  //   if (categoryType === 0) {
  //     dispatch({
  //       type: 'UPDATE_PRODUCTDETAILS',
  //       payload: { category: 'product' },
  //     });
  //   } else {
  //     dispatch({
  //       type: 'UPDATE_PRODUCTDETAILS',
  //       payload: { category: 'career' },
  //     });
  //   }
  // };
  return (
    <Stack
      sx={{
        alignItems: 'center',
        '& .MuiTextField-root': { width: '100%', maxWidth: 500, m: 1 },
      }}
    >
      {/* <FormControl>
        {' '}
        <RadioGroup
          name="costType"
          value={categoryType}
          row
          onChange={handleCategoryTypeChange}
        >
          <FormControlLabel value={0} control={<Radio />} label="Product" />
          <FormControlLabel value={1} control={<Radio />} label="Career" />
        </RadioGroup>
      </FormControl> */}
      <InfoFieldLite
        mainProps={{
          name: 'className',
          label: 'Enter Class Name ',
          value: className,
        }}
        minLength={3}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldLite
        mainProps={{
          name: 'subjectName',
          label: 'Enter Subject Name ',
          value: subjectName,
        }}
        minLength={3}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldLite
        mainProps={{
          name: 'bookName',
          label: 'Enter Book Title ',
          value: bookName,
        }}
        minLength={3}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldLite
        mainProps={{
          name: 'chapterNumber',
          label: 'Enter Chapter Number ',
          value: chapterNumber,
        }}
        minLength={1}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldLite
        mainProps={{
          name: 'chapterName',
          label: 'Enter Chapter Name ',
          value: chapterName,
        }}
        minLength={3}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldNumber
        mainProps={{
          name: 'totalPageNumber',
          label: 'Enter total page numbers in the chapter ',
          value: totalPageNumber,
        }}
        minLength={1}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldURL
        mainProps={{
          name: 'url',
          label: 'Enter the public URL ',
          value: url,
        }}
        minLength={3}
      />
      <SourceField
        mainProps={{
          name: 'source',
          label: 'Enter the public source name ',
          value: source,
        }}
        minLength={3}
      />
      <AddDocs />
    </Stack>
  );
};

export default AddTextBookDetails;
