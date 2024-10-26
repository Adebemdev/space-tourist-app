import { getByText, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Navigation from '../ui/Navigation';
import { MemoryRouter, userEvent } from 'react-router-dom';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../constant';

vi.mock('../../public/assets/shared/logo.svg', () => ({
  default: 'mocked-logo.svg',
}));

// Mock react-icons
vi.mock('react-icons/ai', () => ({
  AiOutlineClose: () => <div data-testid="close-icon" />,
  AiOutlineMenu: () => <div data-testid="menu-icon" />,
}));

const renderWithRouter = (ui, { route = '/' } = {}) => {
  return {
    ...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>),
  };
};

describe('Navigation Component', () => {
  describe('Desktop View', () => {
    beforeEach(() => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }));
    });

    test('renders logo', () => {
      renderWithRouter(<Navigation />);
      const logo = screen.getByTestId('logo');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', 'mocked-logo.svg');
    });

    test('renders all navigation links', () => {
      renderWithRouter(<Navigation />);

      console.log('navLinks:', navLinks);

      screen.debug();

      navLinks.forEach((link) => {
        try {
          // Try to find by exact text content
          const labelElement = screen.getByText(link.text, { exact: true });
          const numberElement = screen.getByText(link.number, { exact: true });

          console.log(`Found label: ${link.text}`);
          console.log(`Found number: ${link.number}`);

          expect(labelElement).toBeInTheDocument();
          expect(numberElement).toBeInTheDocument();
        } catch (error) {
          console.log(`Failed to find elements for link:`, link);
          console.log(`Error:`, error);
          throw error;
        }
      });
    });
  });
});

/*
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useLocation: vi.fn(),
  };
});
*/

/*
describe('Navigation Component', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({
      pathname: '/home',
    });

    vi.clearAllMocks();
  });

  it('renders navigation component', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });
  it('renders logo and navigation correctly', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
*/
