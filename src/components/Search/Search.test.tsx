import { render, screen } from '@testing-library/react';
import Search from './Search';
import { SearchAction } from '../../actions/search/types';

describe('Search Component', () => {
  const mockAction: SearchAction = ({ query, page }) => {
    // Mock implementation for the action
  };

  test('renders search icon and input field with correct styles', () => {
    render(<Search action={mockAction} />);

    const searchIconWrapper = screen.getByTestId('search-icon-wrapper');
    const searchIcon = screen.getByTestId('search-icon');
    const inputField = screen.getByRole('textbox');
    const searchWrapper = screen.getByTestId('search-wrapper');

    expect(searchIcon).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();

    expect(searchIconWrapper).toHaveStyle('position: absolute');
    expect(searchWrapper).toHaveStyle('position: relative');
  });

  test('passes props correctly to input field', () => {
    render(<Search action={mockAction} placeholder="Search..." />);

    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveAttribute('placeholder', 'Search...');
  });

  // Add more test cases as needed, depending on the expected behavior of the Search component
});
