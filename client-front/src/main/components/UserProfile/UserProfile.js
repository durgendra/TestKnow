import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import './UserProfile.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useValue } from '../../context/ContextProvider';
import { getCreditAPI } from '../../actions/user';

const UserProfile = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  const [creditData, setCreditData] = useState();

  useEffect(() => {
    async function getCreditDetails(currentUser) {
      // console.log(currentUser);
      try {
        const data = await getCreditAPI(currentUser);
        // console.log(data);
        setCreditData(data);
        // console.log(testQuestions);
      } catch (err) {
        console.log('Error occurred fetching credits');
      }
    }
    getCreditDetails(currentUser);
    // console.log(uploadedDocs);
    // if (textBooks.length === 0) getTextBooks(dispatch);
  }, []);

  return (
    <div>
      <div className="result">
        <span className="subtitle">Welcome, {currentUser.name}</span>
        <br></br>

        {creditData && (
          <>
            <span className="title">
              Current Credit Balance: {creditData.ktBalance}
            </span>

            <br></br>
            <span className="title">
              Total Credit Usage : {creditData.ktTotalActual}
            </span>
          </>
        )}
      </div>

      <div className="result">
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: 'center', marginTop: 20 }}
          href="/pricing"
        >
          Pricing Plans
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
