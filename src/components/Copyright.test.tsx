import React from 'react';
import { render, screen } from '@testing-library/react';
import Copyright from './Copyright';

describe('Copyright Component', () => {
  test('renders the copyright text with the current year', () => {
    render(<Copyright />);

    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright© OLI - Online Inspections ${currentYear}.`;

    expect(screen.getByTestId('copyright')).toBeInTheDocument();
    expect(screen.getByTestId('copyright').textContent).toBe(copyrightText);
  });
});
