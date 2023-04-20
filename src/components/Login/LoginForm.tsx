import React, { FunctionComponent } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm, Controller, FormProvider, FieldValues } from 'react-hook-form';

import LoginHero from './LoginHero';
import Copyright from '../Copyright';

type LoginFormPropMap = {
  /**
   * Form Header Text
   * @default "Sign in"
   */
  header?: string;

  /**
   * URL for the hero image asset
   * @default none
   */
  hero?: string;

  /**
   * Gradient style override. Set to `false` to disable
   * @default linear-gradient(to left, #f5f6fc85, #ff600066)
   */
  heroGradient?: string | boolean;

  /**
   * Form Submission Callback
   */
  onSubmit: (username: string, password: string, remember?: boolean) => void;

  /**
   * Forgot Password Callback
   */
  onForgotPassword?: React.MouseEventHandler<HTMLAnchorElement>;

  /**
   * Sign Up Callback
   */
  onSignUp?: React.MouseEventHandler<HTMLAnchorElement>;

  /**
   * Allow the auto-focus for the username element on page load
   * @default true
   */
  autoFocus?: boolean;
};

const LoginForm: FunctionComponent<LoginFormPropMap> = ({
  header,
  hero,
  heroGradient,
  onSubmit,
  onForgotPassword,
  onSignUp,
  autoFocus,
}) => {
  const methods = useForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const handleFormSubmit = (data: FieldValues) => {
    onSubmit(data.username, data.password, data.remember);
  };

  return (
    <FormProvider {...methods}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={hero ? 8 : 12}
          md={hero ? 5 : 12}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: hero ? 8 : 12,
              mx: hero ? 4 : 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {header || 'Sign in'}
            </Typography>
            <Box
              component="form"
              data-testid="login-form"
              noValidate
              onSubmit={handleSubmit(handleFormSubmit)}
              sx={{ mt: 1 }}
            >
              <Controller
                name="username"
                control={control}
                rules={{
                  required: 'Username or Email is required',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$|^[a-zA-Z0-9_]+$/,
                    message: 'Invalid username or email',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    inputProps={{ 'data-testid': 'username' }}
                    label="Username or Email"
                    autoFocus={autoFocus !== false}
                    error={!!errors.username}
                    helperText={<>{errors.username?.message}</>}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) || 'Password must contain at least 1 uppercase character',
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) || 'Password must contain at least 1 lowercase character',
                    hasNumber: (value) =>
                      /\d/.test(value) || 'Password must contain at least 1 number',
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                      'Password must contain at least 1 special character',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    inputProps={{ 'data-testid': 'password' }}
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={<>{errors.password?.message}</>}
                  />
                )}
              />
              <Controller
                name="remember"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        value="remember"
                        data-testid="remember-me"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                )}
              />
              <Button
                type="submit"
                data-testid="sign-in-button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    data-testid="forgot-password"
                    onClick={onForgotPassword}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" data-testid="sign-up" onClick={onSignUp}>
                    {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        {hero && (
          <Grid item xs={false} sm={4} md={7}>
            <LoginHero image={hero} gradient={heroGradient} />
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
};

export default LoginForm;
