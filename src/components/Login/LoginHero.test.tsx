import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginHero from './LoginHero';

describe('LoginHero Component', () => {
  const imageUrl = 'https://example.com/image.jpg';

  test('renders empty fragment if no image is provided', () => {
    const { container } = render(<LoginHero image={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders the component with a provided image and default gradient', () => {
    render(<LoginHero image={imageUrl} />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveStyle(
      `background-image: linear-gradient(to left, #f5f6fc85, #ff600066), url('${imageUrl}')`
    );
  });

  test('renders the component with a provided image and custom gradient', () => {
    const customGradient = 'linear-gradient(to right, #f5f6fc85, #ff600066)';
    render(<LoginHero image={imageUrl} gradient={customGradient} />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveStyle(`background-image: ${customGradient}, url('${imageUrl}')`);
  });

  test('renders the component with a provided image and no gradient', () => {
    render(<LoginHero image={imageUrl} gradient={false} />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveStyle(
      `background-image: linear-gradient(to left, #ffffff00, #ffffff00), url('${imageUrl}')`
    );
  });
});
