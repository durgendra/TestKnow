import { Check } from '@mui/icons-material';
import { Avatar, InputAdornment, TextField } from '@mui/material';
import pendingIcon from './icons/progress1.svg';
import React, { useState } from 'react';
import { useValue } from '../../../context/ContextProvider';

let timer;
const ResultField = ({ mainProps, optionalProps = {}, minLength }) => {
  const { dispatch } = useValue();
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_DETAILSTEXTBOOK',
      payload: { [e.target.name]: e.target.value },
    });
    if (!editing) setEditing(true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setEditing(false);
      if (e.target.value.length < minLength) {
        if (!error) setError(true);
        if (success) setSuccess(false);
      } else {
        if (error) setError(false);
        if (!success) setSuccess(true);
      }
    }, 1000);
  };
  return (
    <TextField
      {...mainProps}
      {...optionalProps}
      {...{ paddingHorizontal: 20, maxWidth: 100 }}
      error={error}
      helperText={error && `This field must be ${minLength} characters or more`}
      color={success ? 'success' : 'primary'}
      multiline
      rows={15}
      fullWidth
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {editing ? (
              <Avatar src={pendingIcon} sx={{ height: 70 }} />
            ) : (
              success && <Check color="success" />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ResultField;
