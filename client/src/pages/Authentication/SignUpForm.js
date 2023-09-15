import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import customerService from '../../services/customers';

const SignUpForm = () => {
  const [hidden, setHidden] = useState(true);

  const handleClickShowPassword = () => {
    setHidden((prev) => !prev);
  };
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(2, 'Must be 2 characters or more')
      .required('First Name is Required'),
    lastName: yup.string().min(2, 'Must be 2 characters or more'),
    phone: yup
      .string()
      .min(10, 'Must contain 10 digits')
      .required('Phone No. is Required')
      .matches(/^[6-9]\d{9}$/, { message: 'Please enter valid number.' }),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    },
    initialErrors: {
      lastName: ' ',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await customerService.addNewCustomer({
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
          password: values.password,
        });
        console.log('New User', response);
        resetForm();
      } catch (err) {
        console.log('Sign Up Error', err);
        resetForm();
        /* if (!err?.response) {
          console.log('No Server Response', err);
        } else {
          console.log('Registration Failed');
        } */
      }
    },
  });

  return (
    <Box display="flex" flexDirection="column" sx={{ width: '100%' }}>
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ fontWeight: 'medium', pt: 4, color: 'white' }}
      >
        Sign Up
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle1"
        sx={{ width: '100%', fontWeight: 'medium', color: 'secondary.light', pt: 2, pb: 4 }}
      >
        Create an account
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container px={2} spacing={0.5} width="100%">
          <Grid item width={1}>
            <Box display="flex" width={1} flexDirection={{ xs: 'column', md: 'row' }}>
              <TextField
                required
                id="firstName"
                name="firstName"
                type="text"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={
                  formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : ' '
                }
                variant="filled"
                label="First Name"
                FormHelperTextProps={{ style: { backgroundColor: 'transparent' } }}
                InputLabelProps={{ style: { color: 'black' } }}
                sx={{
                  width: { xs: '100%', md: '50%' },
                  mr: { xs: '0px', md: '8px' },
                  color: 'black',
                  input: { backgroundColor: 'white', color: 'black' },
                }}
              />
              <TextField
                id="lastName"
                name="lastName"
                type="text"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={
                  formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ' '
                }
                variant="filled"
                label="Last Name"
                FormHelperTextProps={{ style: { backgroundColor: 'transparent' } }}
                InputLabelProps={{ style: { color: 'black' } }}
                sx={{
                  width: { xs: '100%', md: '50%' },
                  color: 'black',
                  input: { backgroundColor: 'white', color: 'black' },
                }}
              />
            </Box>
          </Grid>
          <Grid item width="100%">
            <TextField
              required
              id="phone"
              name="phone"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ' '}
              variant="filled"
              label="Phone Number"
              fullWidth
              FormHelperTextProps={{ style: { backgroundColor: 'transparent' } }}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                color: 'black',
                input: { backgroundColor: 'white', color: 'black' },
              }}
            />
          </Grid>
          <Grid item width="100%">
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
          <Grid item width="100%">
            <TextField
              required
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={
                formik.touched.password && formik.errors.password ? formik.errors.password : ' '
              }
              variant="filled"
              label="Password"
              fullWidth
              FormHelperTextProps={{ style: { backgroundColor: 'transparent' } }}
              InputLabelProps={{ style: { color: 'black' } }}
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
          <Grid item display="flex" pt={3} width="100%">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
              sx={{ bgcolor: 'secondary.light', mr: '8px' }}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              onClick={formik.handleReset}
              sx={{ color: 'text.primary', borderColor: 'text.primary' }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SignUpForm;
