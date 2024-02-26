import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Description = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        Testing Effect: TestKnow helps students remember better and get better
        marks.
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >
        Regular knowledge testing is a powerful means for improving learning. On
        main tests, prior knowledge tests produce substantially greater
        retention than just regular studying. This is called "Testing Effect".
        TestKnow facilitates regular knowledge testing and quick feedback
        through AI generated quizzes, short questions and assessments.
      </Typography>
    </Box>
  );
};

export default Description;
