import {FC, memo} from 'react';
import {Formik} from 'formik';
import {useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {initialValues, validationSchema} from './constants';
const logo = require('../../../assets/finalmente-conocemos-sexo-bebe_329181-3230.png');

interface FormValues {
     email: string;
     password: string;
}
const theme = createTheme();

const Login: FC = () => {
     const navigate = useNavigate();
     const handleSubmit = (values: FormValues) => {
          console.log(values);
          navigate('/dashboard');
     };

     return (
          <ThemeProvider theme={theme}>
               <Grid container component="main" sx={{height: '100vh'}}>
                    <CssBaseline />
                    <Grid
                         item
                         xs={false}
                         sm={4}
                         md={7}
                         sx={{
                              backgroundImage: `url(${logo})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundColor: (t) =>
                                   t.palette.mode === 'light'
                                        ? t.palette.grey[50]
                                        : t.palette.grey[900],
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                         }}
                    />
                    <Grid
                         item
                         xs={12}
                         sm={8}
                         md={5}
                         component={Paper}
                         elevation={6}
                         square
                    >
                         <Box
                              sx={{
                                   my: 8,
                                   mx: 4,
                                   display: 'flex',
                                   flexDirection: 'column',
                                   alignItems: 'center',
                              }}
                         >
                              <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                   <LockOutlinedIcon />
                              </Avatar>
                              <Typography component="h1" variant="h5">
                                   Sign in
                              </Typography>
                              <Formik
                                   validationSchema={validationSchema}
                                   onSubmit={handleSubmit}
                                   initialValues={initialValues}
                              >
                                   {({
                                        handleChange,
                                        handleBlur,
                                        values,
                                        errors,
                                        touched,
                                   }) => (
                                        <Box
                                             component="form"
                                             noValidate
                                             onSubmit={(
                                                  e: React.FormEvent<HTMLFormElement>
                                             ) => handleSubmit(values)}
                                             sx={{mt: 1}}
                                        >
                                             <TextField
                                                  margin="normal"
                                                  required
                                                  fullWidth
                                                  id="email"
                                                  label="Email Address"
                                                  name="email"
                                                  autoFocus
                                                  value={values.email}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  error={
                                                       touched.email &&
                                                       Boolean(errors.email)
                                                  }
                                                  helperText={
                                                       touched.email &&
                                                       errors.email
                                                  }
                                                  autoComplete="current-email"
                                             />
                                             <TextField
                                                  margin="normal"
                                                  required
                                                  fullWidth
                                                  name="password"
                                                  label="Password"
                                                  type="password"
                                                  id="password"
                                                  value={values.password}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  error={
                                                       touched.password &&
                                                       Boolean(errors.password)
                                                  }
                                                  helperText={
                                                       touched.password &&
                                                       errors.password
                                                  }
                                                  autoComplete="current-password"
                                             />

                                             <Button
                                                  type="submit"
                                                  fullWidth
                                                  variant="contained"
                                                  sx={{
                                                       mt: 3,
                                                       mb: 2,
                                                       bgcolor: '#a00bb9ff',
                                                       '&:hover': {
                                                            bgcolor: '#ba00db',
                                                       },
                                                  }}
                                             >
                                                  Sign In
                                             </Button>

                                             <Grid container>
                                                  <Grid item xs>
                                                       <Link
                                                            href="#"
                                                            variant="body2"
                                                            sx={{
                                                                 color: '#a00bb9ff',
                                                                 textDecoration:
                                                                      'none',
                                                            }}
                                                       >
                                                            Forgot password?
                                                       </Link>
                                                  </Grid>
                                             </Grid>
                                             <Box sx={{mt: 5}}>
                                                  <Typography
                                                       variant="body2"
                                                       color="textSecondary"
                                                       align="center"
                                                  >
                                                       {'© '}
                                                       <Link
                                                            color="inherit"
                                                            href="https://www.mywebsite.com/"
                                                       >
                                                            Babies
                                                       </Link>{' '}
                                                       {new Date().getFullYear()}
                                                       {'.'}
                                                  </Typography>
                                             </Box>
                                        </Box>
                                   )}
                              </Formik>
                         </Box>
                    </Grid>
               </Grid>
          </ThemeProvider>
     );
};

export default memo(Login);
