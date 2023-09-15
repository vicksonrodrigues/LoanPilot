import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
// import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
  /* const navigate = useNavigate(); */
  /* const location = useLocation(); */
  const [hidden, setHidden] = useState(true);

  /* const from = location.state?.pathname || '/'; */

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    /* onSubmit: async (values, action) => {
      try {
        const { accessToken } = await login({
          email: values.email,
          password: values.password,
        }).unwrap();
        
        action.resetForm();
        navigate(from, { state: location.state.state });
       
      } catch (err) {
        if (!err.status) {
          notify('No Server Response', 'error');
        } else if (err.status === 400) {
          notify('Missing Username or Password', 'error');
        } else if (err.status === 404) {
          notify('No User Found: Check your Email or Password', 'error');
        } else {
          notify(`${err.data?.error}`, 'error');
        }
      }
    }, */
  });

  const handleClickShowPassword = () => {
    setHidden((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ width: '100%', fontWeight: 'medium', color: 'white', pt: 4 }}
      >
        Log in
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle1"
        sx={{ width: '100%', fontWeight: 'medium', color: 'secondary.light', pt: 2, pb: 4 }}
      >
        {`Welcome back you've been missed!`}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column" px={2} spacing={1}>
          <Grid item>
            <TextField
              required
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ' '}
              label="Email"
              variant="filled"
              fullWidth
              FormHelperTextProps={{ style: { backgroundColor: 'transparent' } }}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                color: 'black',
                input: { backgroundColor: 'white', color: 'black' },
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="password"
              name="password"
              type={hidden ? 'password' : 'text'}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={
                formik.touched.password && formik.errors.password ? formik.errors.password : ' '
              }
              label="Password"
              variant="filled"
              fullWidth
              InputLabelProps={{ style: { color: 'black' } }}
              FormHelperTextProps={{ style: { backgroundColor: 'transparent' } }}
              sx={{
                color: 'black',
                input: { backgroundColor: 'white', color: 'black' },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      margin: '0px',
                      height: '100%',
                      padding: '28px 14px',
                      backgroundColor: ' white',
                    }}
                  >
                    <IconButton onClick={handleClickShowPassword} sx={{ height: '100%' }}>
                      {hidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { padding: '0px' },
              }}
            />
          </Grid>

          <Grid item display="flex" justifyContent="center" pt={3}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
              sx={{ bgcolor: 'secondary.main', borderRadius: '25px' }}
            >
              <Typography variant="button" color="black">
                Login
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginForm;
