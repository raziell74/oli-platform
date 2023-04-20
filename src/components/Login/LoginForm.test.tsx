import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  const heroImageUrl = 'https://example.com/image.jpg';
  const onSubmit = jest.fn();
  const onForgotPassword = jest.fn();
  const onSignUp = jest.fn();

  test('renders LoginForm with hero image', () => {
    render(<LoginForm hero={heroImageUrl} onSubmit={onSubmit} />);

    const loginHero = screen.getByTestId('login-hero');
    expect(loginHero).toBeInTheDocument();
  });

  test('Submitting the login form calls the onSubmit callback', async () => {
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId('username'), { target: { value: 'testUser' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'TestPass1!' } });
    fireEvent.click(screen.getByTestId('sign-in-button'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith('testUser', 'TestPass1!', false));
  });

  test('toggling the "Remember me" checkbox updates its state', () => {
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByTestId('remember-me'));
    expect(screen.getByTestId('remember-me').querySelector('input')).toBeChecked();
  });

  test('clicking "Forgot password?" calls the onForgotPassword callback', () => {
    render(<LoginForm onSubmit={onSubmit} onForgotPassword={onForgotPassword} />);

    fireEvent.click(screen.getByTestId('forgot-password'));

    expect(onForgotPassword).toHaveBeenCalled();
  });

  test('clicking "Sign Up" calls the onSignUp callback', () => {
    render(<LoginForm onSubmit={onSubmit} onSignUp={onSignUp} />);

    fireEvent.click(screen.getByTestId('sign-up'));

    expect(onSignUp).toHaveBeenCalled();
  });

  test('shows an error message for an empty username field', async () => {
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByTestId('sign-in-button'));

    const errorMessage = await screen.findByText('Username or Email is required');
    expect(errorMessage).toBeInTheDocument();
  });

  test('shows an error message for an invalid username or email', async () => {
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId('username'), { target: { value: 'test!User' } });
    fireEvent.click(screen.getByTestId('sign-in-button'));

    const errorMessage = await screen.findByText('Invalid username or email');
    expect(errorMessage).toBeInTheDocument();
  });

  test('shows an error message for an empty password field', async () => {
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByTestId('sign-in-button'));

    const errorMessage = await screen.findByText('Password is required');
    expect(errorMessage).toBeInTheDocument();
  });

  test('shows error messages for password validation rules', async () => {
    render(<LoginForm onSubmit={onSubmit} />);

    const invalidPasswords = [
      { value: 'short', message: 'Password must be at least 6 characters' },
      { value: 'nopupper', message: 'Password must contain at least 1 uppercase character' },
      { value: 'NOLOWERC', message: 'Password must contain at least 1 lowercase character' },
      { value: 'NoNumber', message: 'Password must contain at least 1 number' },
      { value: 'NoSpecial1', message: 'Password must contain at least 1 special character' },
    ];

    for (const { value, message } of invalidPasswords) {
      fireEvent.change(screen.getByTestId('password'), { target: { value } });
      fireEvent.click(screen.getByTestId('sign-in-button'));

      const errorMessage = await screen.findByText(message);
      expect(errorMessage).toBeInTheDocument();
    }
  });
});
