import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    const buttonText = 'Click me';

    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
  });

  test('handles onClick event', () => {
    const buttonText = 'Click me';
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button', { name: buttonText });
    userEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
