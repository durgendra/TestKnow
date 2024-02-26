import React, { useCallback, useState } from 'react';
import { Paper } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import ProgressList from './progressList/ProgressList';
import PapersList from './PapersList';

const AddDocs = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    // console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { 'application/pdf': [] },
  });
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
    </>
  );
};

export default AddDocs;
