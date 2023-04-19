import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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

  test('Submitting the login form calls the onSubmit callback', () => {
    render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId('username'), { target: { value: 'testUser' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'testPass' } });
    fireEvent.click(screen.getByTestId('sign-in-button'));

    expect(onSubmit).toHaveBeenCalledWith('testUser', 'testPass', false, expect.any(Object));
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
});
