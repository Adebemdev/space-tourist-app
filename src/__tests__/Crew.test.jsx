import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Crew from '../pages/Crew';
import Anousheh from '/assets/crew/image-anousheh-ansari.png';
import Douglas from '/assets/crew/image-douglas-hurley.png';
import Mark from '/assets/crew/image-mark-shuttleworth.png';
import Victor from '/assets/crew/image-victor-glover.png';

vi.mock('/assets/crew/image-douglas-hurley.png', () => ({
  default: 'mocked-image-douglas-hurley-path',
}));
vi.mock('/assets/crew/image-victor-glover.png', () => ({
  default: 'mocked-image-victor-glover-path',
}));
vi.mock('/assets/crew/image-mark-shuttleworth.png', () => ({
  default: 'mocked-image-mark-shuttleworth-path',
}));
vi.mock('/assets/crew/image-anousheh-ansari.png', () => ({
  default: 'mocked-image-anousheh-ansari-path',
}));

describe('Crew component', () => {
  const Crews = [
    {
      id: 0,
      name: 'Douglas Hurley',
      image: Douglas,
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
      id: 1,
      name: 'Mark Shuttleworth',
      image: Mark,
      role: 'Mission Specialist',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
      id: 2,
      name: 'Victor Glover',
      image: Victor,
      role: 'Pilot',
      bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      id: 3,
      name: 'Anousheh Ansari',
      image: Anousheh,
      role: 'Flight Engineer',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
  ];
  test('Should render all the component inside this component', () => {
    render(<Crew />);

    expect(screen.getByTestId('crew-container')).toBeInTheDocument();
    expect(screen.getByTestId('crew-paragraph-one')).toBeInTheDocument();
    expect(screen.getByTestId('outer-div')).toBeInTheDocument();
    expect(screen.getByTestId('inner-div')).toBeInTheDocument();
    expect(screen.getByTestId('inner-div-content')).toBeInTheDocument();
    expect(screen.getByTestId('para-1')).toBeInTheDocument();
    expect(screen.getByTestId('para-2')).toBeInTheDocument();
    expect(screen.getByTestId('para-3')).toBeInTheDocument();
    expect(screen.getByTestId('data-content')).toBeInTheDocument();
  });
  test('Should render items and toggles', () => {
    render(<Crew />);

    Crews.forEach((crew) => {
      const paragraph = screen.getByTestId(`paragraph-${crew.id}`);
      expect(paragraph).toBeInTheDocument();

      const firstPara = screen.getByTestId(`paragraph-${Crews[0].id}`);
      fireEvent.click(firstPara);
    });
  });
});
