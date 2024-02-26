import { Button, TextField, Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import './CopyAssessLink.css';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useValue } from '../../../context/ContextProvider';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CopyToClipboardButtonFull from 'main/components/common/CopyToClipboardFull';

const urlRef = process.env.REACT_APP_CLIENT_URL;

const CopyAssessLink = () => {
  let { id } = useParams();
  // const history = useHistory();
  const {
    state: { product, dailyKT },
    dispatch,
  } = useValue();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h5'} gutterBottom>
            Here is your shareable link to request assessment from your friends
          </Typography>
          <Typography>{`${urlRef}/faq/shared/assessment/${id}`}</Typography>
          <Button href={`${urlRef}/faq/shared/assessment/${id}`}>
            Preview the assessment page
          </Button>
          {/* <CopyToClipboardButton
            {...{ text: `${urlRef}/faq/shared/assessment/${id}` }}
          /> */}
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <CopyToClipboardButtonFull
            {...{ text: `${urlRef}/faq/shared/assessment/${id}` }}
          />
          {/* <Button
            variant="contained"
            color="primary"
            size="large"
            href={`${urlRef}/faq/shared/assessment/${id}`}
            target="_blank"
          >
            Preview
          </Button> */}
        </Box>
      </Box>
    </Container>
    // <div>
    //   <TextField
    //     id="standard-read-only-input"
    //     label="Read Only"
    //     defaultValue={`${urlRef}/faq/shared/assessment/${id}`}
    //     InputProps={{
    //       readOnly: true,
    //     }}
    //   />
    //   <div className="result">
    //     <Box
    //       display="flex"
    //       flexDirection={{ xs: 'column', sm: 'row' }}
    //       alignItems={{ xs: 'stretched', sm: 'flex-start' }}
    //     >
    //       <Button
    //         variant="contained"
    //         color="primary"
    //         size="large"
    //         fullWidth={isMd ? false : true}
    //         href="/faq"
    //       >
    //         Try for free
    //       </Button>
    //       <Box
    //         component={Button}
    //         href={`${urlRef}/faq/shared/assessment/${id}`}
    //         color="primary"
    //         size="large"
    //         target="_blank"
    //         marginTop={{ xs: 2, sm: 0 }}
    //         marginLeft={{ sm: 2 }}
    //         fullWidth={isMd ? false : true}
    //         endIcon={
    //           <Box
    //             component={'svg'}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             width={24}
    //             height={24}
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
    //               clipRule="evenodd"
    //             />
    //           </Box>
    //         }
    //       >
    //         Preview
    //       </Box>
    //     </Box>
    //   </div>
    // </div>
  );
};

export default CopyAssessLink;
