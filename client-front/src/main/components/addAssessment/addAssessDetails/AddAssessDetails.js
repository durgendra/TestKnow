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

const AddAssessDetails = () => {
  const {
    state: {
      detailsDailyKT: { title, paragraph, url, result, quizAnswer, source },
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
          name: 'title',
          label: 'Enter Title of Assessment ',
          value: title,
        }}
        minLength={4}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <SourceField
        mainProps={{
          name: 'source',
          label: 'Enter the Source ',
          value: source,
        }}
        minLength={3}
      />
    </Stack>
  );
};

export default AddAssessDetails;
