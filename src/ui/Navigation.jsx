import logoIcon from '../../public/assets/shared/logo.svg';
import { navLinks } from '../constant';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="relative flex items-center justify-between py-8">
      <img src={logoIcon} alt="logoIcon" className="px-8" />
      <span className="absolute bottom-[1px] left-36 right-[65%] top-1/2 z-50 h-[1px] bg-accent"></span>
      <ul className="flex w-2/3 items-center justify-around bg-accent px-44 py-10">
        {navLinks.map((navlink, index) => (
          <li
            className="cursor-pointer font-sans-cond text-fs-400 uppercase"
            key={index}
          >
            <Link
              to={`${navlink.route}`}
              className={
                navlink.route === pathname &&
                'border-b-4 border-colorWhite py-10'
              }
            >
              <span className="mr-4 text-colorWhite">{navlink.number}</span>
              <span className="text-colorAccent">{navlink.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navigation;
