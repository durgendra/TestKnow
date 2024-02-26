import React, { useCallback, useState, useEffect } from 'react';
import {
  Autocomplete,
  Paper,
  TextField,
  InputAdornment,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import ProgressList from './progressList/ProgressList';
import PapersList from './PapersList';
import { useValue } from '../../../context/ContextProvider';

const AddDocs = () => {
  const {
    state: { pageNumbers, pageNumber },
    dispatch,
  } = useValue();

  const [files, setFiles] = useState([]);
  const [getPages, setPages] = useState([1]);

  useEffect(() => {
    if (pageNumbers) {
      setPages(Array.from({ length: pageNumbers }, (_, i) => i + 1));
    } else {
      console.log('Subsequent Render');
    }
  }, [pageNumbers]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { 'application/pdf': [] },
  });
  const handlePageNumber = (event, value) => {
    dispatch({
      type: 'UPDATE_PAGENUMBER',
      payload: value,
    });
  };
  return (
    <>
      <Paper
        sx={{
          cursor: 'pointer',
          background: '#fafafa',
          color: '#bdbdbd',
          border: '1px dashed #ccc',
          '&:hover': { border: '1px solid #ccc' },
        }}
      >
        <div style={{ padding: '16px' }} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p style={{ color: 'green' }}> Drop the file here...</p>
          ) : (
            <p>Drag 'n' Drop a file here, or click to select file</p>
          )}
          <em>( document with *.pdf only extension ) </em>
        </div>
      </Paper>
      <ProgressList {...{ files }} />
      <PapersList />
      {/* {pageNumbers && (
        <TextField
          sx={{ width: '25ch !important' }}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                Select Page Number
              </InputAdornment>
            ),
          }}
          inputProps={{
            type: 'number',
            min: 1,
            max: pageNumbers,
          }}
          value={pageNumber}
          onChange={handlePageNumber}
          name="pageNumber"
        />
      )} */}
      <br></br>
      <br></br>
      {pageNumbers > 1 && (
        <Grid item xs={12} md={4}>
          {/* <Typography fontWeight={700} variant={'h6'} gutterBottom>
            News Results
          </Typography> */}
          <Typography color={'text.secondary'}>
            The document has multiples pages. Please select a page number.
          </Typography>

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
              <TextField {...params} label="Select Page Number" />
            )}
          />
        </Grid>
      )}
    </>
  );
};

export default AddDocs;
