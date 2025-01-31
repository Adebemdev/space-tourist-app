import { describe, expect, test, vi } from 'vitest';
import Technology from '../pages/Technology';
import { fireEvent, render, screen } from '@testing-library/react';
import Launch from '/assets/technology/image-launch-vehicle-portrait.jpg';
import LaunchMobile from '/assets/technology/image-launch-vehicle-landscape.jpg';
import Capsule from '/assets/technology/image-space-capsule-portrait.jpg';
import CapsuleMobile from '/assets/technology/image-space-capsule-landscape.jpg';
import Spaceport from '/assets/technology/image-spaceport-portrait.jpg';
import SpaceportMobile from '/assets/technology/image-spaceport-landscape.jpg';

vi.mock('/assets/technology/image-launch-vehicle-portrait.jpg', () => ({
  default: 'mocked-image-launch-vehicle-portrait-path',
}));
vi.mock('/assets/technology/image-launch-vehicle-landscape.jpg', () => ({
  default: 'mocked-image-launch-vehicle-landscape-path',
}));
vi.mock('/assets/technology/image-space-capsule-portrait.jpg', () => ({
  default: 'mocked-image-space-capsule-portrait-path',
}));
vi.mock('/assets/technology/image-space-capsule-landscape.jpg', () => ({
  default: 'mocked-image-launch-vehicle-landscape-path',
}));
vi.mock('/assets/technology/image-spaceport-portrait.jpg', () => ({
  default: 'mocked-image-spaceport-portrait-path',
}));
vi.mock('/assets/technology/image-spaceport-landscape.jpg', () => ({
  default: 'mocked-image-launch-vehicle-landscape-path',
}));

describe('Technology component', () => {
  const Vehicles = [
    {
      id: 1,
      name: 'LAUNCH VEHICLE',
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: Launch,
      imageMobile: LaunchMobile,
    },
    {
      id: 2,
      name: 'SPACEPORT',
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      image: Spaceport,
      imageMobile: SpaceportMobile,
    },
    {
      id: 3,
      name: 'SPACE CAPSULE',
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: Capsule,
      imageMobile: CapsuleMobile,
    },
  ];
  test('Should render outer container and the paragraph', () => {
    render(<Technology />);
    expect(screen.getByTestId('data-tech')).toBeInTheDocument();
    const techParagraph = screen.getByTestId('tech-paragraph');
    expect(techParagraph).toBeInTheDocument();
    expect(techParagraph).toHaveTextContent('Space launch 101');
  });

  test('Should the content of the technology components', () => {
    render(<Technology />);

    Vehicles.forEach((vehicle) => {
      const paragraph = screen.getByTestId(`paragraph-${vehicle.id}`);
      expect(paragraph).toBeInTheDocument();

      const firstPara = screen.getByTestId(`paragraph-${Vehicles[0].id}`);
      fireEvent.click(firstPara);
    });

    expect(screen.getByTestId('image-container')).toBeInTheDocument();
    const imageElememt = screen.getByTestId('image');
    expect(imageElememt).toBeInTheDocument();
  });
});
