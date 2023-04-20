import React from 'react';
import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SplitButton from './SplitButton';

const options = ['Option 1', 'Option 2', 'Option 3'];
const disabled = ['Option 3'];

describe('SplitButton Component', () => {
  test('renders SplitButton with the correct initial option', () => {
    const onClick = jest.fn();
    render(<SplitButton options={options} disabled={disabled} onClick={onClick} />);

    const mainButton = screen.getByTestId('sb-button');
    expect(mainButton).toHaveTextContent(options[1]);
  });

  test('clicking the main button triggers onClick with the correct option', () => {
    const onClick = jest.fn();
    render(<SplitButton options={options} disabled={disabled} onClick={onClick} />);

    fireEvent.click(screen.getByTestId('sb-button'));
    expect(onClick).toHaveBeenCalledWith(options[1], expect.any(Object));
  });

  test('clicking the dropdown button toggles the menu', async () => {
    const onClick = jest.fn();
    render(<SplitButton options={options} disabled={disabled} onClick={onClick} />);

    fireEvent.click(screen.getByTestId('sb-dropdown'));
    expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('sb-dropdown'));
    await waitForElementToBeRemoved(() => screen.queryByRole('menuitem', { name: options[0] }));
    expect(screen.queryByRole('menuitem', { name: options[0] })).not.toBeInTheDocument();
  });

  test('disabled option is not clickable', () => {
    const onClick = jest.fn();
    render(<SplitButton options={options} disabled={disabled} onClick={onClick} />);

    fireEvent.click(screen.getByTestId('sb-dropdown'));
    fireEvent.click(screen.getByTestId('sb-menu-item-2'));

    expect(onClick).not.toHaveBeenCalled();
  });

  test('clicking a menu item updates the selected option', () => {
    const onClick = jest.fn();
    render(<SplitButton options={options} disabled={disabled} onClick={onClick} />);

    fireEvent.click(screen.getByTestId('sb-dropdown'));
    fireEvent.click(screen.getByTestId('sb-menu-item-0'));

    expect(screen.getByTestId('sb-button')).toHaveTextContent(options[0]);
  });
});
