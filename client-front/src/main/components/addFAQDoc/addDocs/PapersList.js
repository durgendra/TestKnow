import React, { useEffect, useState } from 'react';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import { AddAlarm, Cancel } from '@mui/icons-material';
import { useValue } from '../../../context/ContextProvider';
import deleteFile from '../../../firebase/deleteFile';

import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
// import pdfjsLib from 'pdfjs-dist/build/pdf';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
// import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const PapersList = () => {
  const {
    state: { papers, currentUser },
    dispatch,
  } = useValue();

  useEffect(() => {
    if (papers[0]) {
      var loadingTask = pdfjsLib.getDocument(papers[0].url);
      // var loadingTask = getDocument(paperURL);

      loadingTask.promise
        .then(function (pdf) {
          const pageNumbers = pdf.numPages;
          dispatch({
            type: 'RESET_PAGENUMBERS',
          });
          dispatch({
            type: 'UPDATE_PAGENUMBERS',
            payload: pageNumbers,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // const uploadImage = async () => {
    //   const imageName = uuidv4() + "." + file.name.split(".").pop();
    //   const localName = file.name;
    //   try {
    //     const url = await uploadFileProgress(
    //       file,
    //       `papers/${currentUser?.id}`,
    //       imageName,
    //       setProgress
    //     );

    //     dispatch({
    //       type: "UPDATE_PAPERS",
    //       payload: { url: url, local: localName },
    //     });
    //     setImageURL(null);
    //   } catch (error) {
    //     dispatch({
    //       type: "UPDATE_ALERT",
    //       payload: { open: true, severity: "error", message: error.message },
    //     });
    //     console.log(error);
    //   }
    // };
    // setImageURL(URL.createObjectURL(file));
    // uploadImage();
  }, [papers]);

  // const getPageNumbers = async (paperURL) => {
  //   var loadingTask = pdfjsLib.getDocument(paperURL);
  //   // var loadingTask = getDocument(paperURL);

  //   loadingTask.promise
  //     .then(function (pdf) {
  //       console.log(pdf.numPages);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const handleDelete = async (paperURL) => {
    dispatch({ type: 'DELETE_PAPER', payload: paperURL });
    const paperName = paperURL
      ?.split(`${currentUser?.id}%2F`)[1]
      ?.split('?')[0];
    try {
      await deleteFile(`pdfs/${currentUser?.id}/${paperName}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ImageList
      rowHeight={250}
      sx={{
        '&.MuiImageList-root': {
          gridTemplateColumns:
            'repeat(auto-fill, minmax(250px, 1fr))!important',
        },
      }}
    >
      {papers.map((paper, index) => (
        <ImageListItem key={index} cols={1} rows={1}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={paper.url} />
          </Worker>
          {/* <img
            src={image}
            alt="rooms"
            loading="lazy"
            style={{ height: "100%" }}
          /> */}
          {/* <ImageListItemBar
            position="bottom"
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%',
            }}
            actionIcon={
              <IconButton
                sx={{ color: 'white' }}
                onClick={() => getPageNumbers(paper.url)}
              >
                <AddAlarm />
              </IconButton>
            }
          ></ImageListItemBar> */}

          <ImageListItemBar
            position="top"
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%',
            }}
            actionIcon={
              <IconButton
                sx={{ color: 'white' }}
                onClick={() => handleDelete(paper.url)}
              >
                <Cancel />
              </IconButton>
            }
          ></ImageListItemBar>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PapersList;
