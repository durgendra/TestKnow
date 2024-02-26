import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useValue } from '../../../../../context/ContextProvider';
import { Lock } from '@mui/icons-material';

const Form = () => {
  const { dispatch } = useValue();
  return (
    <Box>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
        >
          Login
        </Typography> */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Login or Register to access the page
        </Typography>
        <br></br>
        <Typography color="text.secondary">
          Use Google or your email address .
        </Typography>
      </Box>
      <Button
        size={'large'}
        variant={'contained'}
        sx={{ ml: 2 }}
        startIcon={<Lock />}
        onClick={() => {
          dispatch({ type: 'OPEN_LOGIN' });
        }}
      >
        Login
      </Button>
      {/* <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography>
            <TextField
              label="Email *"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Button
                  size={'large'}
                  variant={'outlined'}
                  component={Link}
                  href={'/signin-simple'}
                  fullWidth
                >
                  Back to login
                </Button>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Send reset link
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form> */}
    </Box>
  );
};

export default Form;
