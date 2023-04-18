import React, { FunctionComponent, useState } from 'react';
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

import LoginHero from './LoginHero';
import Copyright from '../Copyright';

type LoginFormPropMap = {
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
  onSubmit?: (
    username: string,
    password: string,
    remember?: boolean,
    event?: React.FormEvent
  ) => boolean;

  /**
   * Forgot Password Callback
   */
  onForgotPassword?: React.MouseEventHandler<HTMLAnchorElement>;

  /**
   * Sign Up Callback
   */
  onSignUp?: React.MouseEventHandler<HTMLAnchorElement>;
};

const LoginForm: FunctionComponent<LoginFormPropMap> = ({
  hero,
  heroGradient,
  onSubmit,
  onForgotPassword,
  onSignUp,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    return onSubmit ? onSubmit(username, password, remember, event) : false;
  };

  return (
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
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username or Email"
              name="username"
              autoFocus
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={remember}
                  onChange={({ target: { checked } }) => setRemember(checked)}
                />
              }
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={onForgotPassword}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={onSignUp}>
                  {"Don't have an account? Sign Up"}
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
  );
};

export default LoginForm;
