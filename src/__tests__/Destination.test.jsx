import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Destination from '../pages/Destination';
import Moon from '/assets/destination/image-moon.png';
import Mars from '/assets/destination/image-mars.png';
import Europa from '/assets/destination/image-europa.png';
import Titan from '/assets/destination/image-titan.png';

describe('Destination Component', () => {
  const planets = {
    Moon: {
      name: 'Moon',
      image: Moon,
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '4 km',
      travel: '4 days',
    },
    Mars: {
      name: 'Mars',
      image: Mars,
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '3 km',
      travel: '3 days',
    },
    Europa: {
      name: 'Europa',
      image: Europa,
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '6 km',
      travel: '6 days',
    },
    Titan: {
      name: 'Titan',
      image: Titan,
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '5 km',
      travel: '5 days',
    },
  };

  test('render all the contents in the destination component', () => {
    render(<Destination />);

    expect(screen.getByTestId('destination-box')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph-1')).toBeInTheDocument();

    const ImageTextContainer = screen.getByTestId('image-text-container');
    expect(ImageTextContainer).toBeInTheDocument();

    const imageElement = screen.getByTestId('image');
    expect(imageElement).toBeInTheDocument();

    const contentContainer = screen.getByTestId('content-container');
    expect(contentContainer).toBeInTheDocument();

    const dataContainer = screen.getByTestId('data-container');
    expect(dataContainer).toBeInTheDocument();

    Object.keys(planets).forEach((planet) => {
      const contentSection = screen.getByTestId(`content-section-${planet}`);
      expect(contentSection).toBeInTheDocument();
      expect(contentSection).toHaveTextContent(planets[planet].name);
    });

    expect(screen.getByTestId('description')).toBeInTheDocument();
    expect(screen.getByTestId('outer-box')).toBeInTheDocument();
    expect(screen.getByTestId('inner-box')).toBeInTheDocument();
    expect(screen.getByTestId('box-3')).toBeInTheDocument();
    expect(screen.getByTestId('para-1')).toBeInTheDocument();
    expect(screen.getByTestId('para-2')).toBeInTheDocument();
    expect(screen.getByTestId('para-3')).toBeInTheDocument();
    expect(screen.getByTestId('para-4')).toBeInTheDocument();
  });
});
