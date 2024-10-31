import { render, screen } from '@testing-library/react';
import { it, describe, test, expect } from 'vitest';
import Home from '../pages/Home';

describe('Home component', () => {
  test('should render outer div which container two inner div that has different paragraphs and h1', () => {
    render(<Home />);

    const contentBox = screen.getByTestId('content-box');
    expect(contentBox).toBeInTheDocument();

    const section1 = screen.getByTestId('section-1');
    expect(section1).toBeInTheDocument();

    const Heading1 = screen.getByTestId('heading-1');
    expect(Heading1).toBeInTheDocument();
    expect(Heading1).toHaveTextContent('So, you want to travel to');

    const Paragraph1 = screen.getByTestId('paragraph-1');
    expect(Paragraph1).toBeInTheDocument();
    const Paragraph2 = screen.getByTestId('paragraph-1');
    expect(Paragraph2).toBeInTheDocument();
  });
});
