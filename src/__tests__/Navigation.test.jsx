import { getByText, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Navigation from '../ui/Navigation';
import { MemoryRouter, userEvent } from 'react-router-dom';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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
  const navLinks = [
    { route: '/home', text: 'Home', number: '00' },
    { route: '/destination', text: 'Destination', number: '01' },
    { route: '/crew', text: 'Crew', number: '03' },
    { route: '/technology', text: 'Technology', number: '04' },
  ];

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
      navLinks.forEach((link) => {
        const navElement = screen.getByTestId(`nav-link-${link.number}`);
        expect(navElement).toHaveTextContent(link.text);
        expect(navElement.getAttribute('href')).toBe(link.route);
      });
    });
  });
});
