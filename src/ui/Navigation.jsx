import logoIcon from '../../public/assets/shared/logo.svg';
import { navLinks } from '../constant';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="relative flex items-center justify-between py-8">
      <img src={logoIcon} alt="logoIcon" className="px-8" />
      <div className="absolute bottom-[1px] left-36 right-[65%] top-1/2 z-50 h-[1px] bg-accent"></div>
      <div className="flex w-2/3 items-center justify-center bg-accent px-44 py-10">
        {navLinks.map((navlink, index) => (
          <ul key={index} className="flex flex-1">
            <li className="">
              <NavLink
                to={navlink.path}
                className={({ isActive }) =>
                  `cursor-pointer py-10 font-sans-cond text-fs-400 uppercase ${isActive ? 'border-b-4 border-colorWhite' : ''}`
                }
              >
                <span className="mr-4 text-colorWhite">{navlink.number}</span>
                <span className="text-colorAccent">{navlink.label}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </header>
  );
};

export default Navigation;
