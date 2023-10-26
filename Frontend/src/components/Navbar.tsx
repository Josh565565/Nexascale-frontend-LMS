import logo from '@/assets/images/Logo.png';
import { useEffect, useState } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import close from '../assets/images/close.svg';
import menu from '../assets/images/menu.svg';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setPrevScroll(currentScroll);
    };
    scrollSpy.update();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScroll]);

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <header
      className={` fixed left-0 right-0 z-30  mx-auto   ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <nav
        className=" mx-auto mt-10 flex min-h-[64px] w-11/12 cursor-pointer 
      items-center justify-between  rounded-2xl bg-white px-8 py-3 shadow-lg"
      >
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex  items-center justify-center gap-10 font-lato text-lg font-normal max-lg:hidden">
          <li className="">
            <Link to="#service" spy smooth offset={100} duration={500}>
              Service
            </Link>
          </li>
          <li className="">
            <Link to="#howitworks" spy smooth offset={50} duration={500}>
              How-it-works
            </Link>
          </li>
          <li className="">
            <Link to="#subscribe" spy smooth offset={30} duration={500}>
              Subscribe
            </Link>
          </li>
          <li className="">Login</li>
          <button
            type="button"
            className="rounded-full bg-nexa-yellow-800 px-5 py-2 text-white"
          >
            Get Started
          </button>
        </ul>
        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <img src={close} alt="close" width={40} height={40} />
            ) : (
              <img src={menu} alt="menu" width={40} height={40} />
            )}
          </button>
        </div>
      </nav>
      {toggle && (
        <div className=" absolute left-8 w-11/12 rounded-2xl bg-white shadow-lg max-sm:left-4">
          <ul className=" flex-col items-center justify-center px-9 text-2xl">
            <li className="mt-10">
              <Link
                to="#service"
                spy
                smooth
                offset={100}
                duration={500}
                onClick={handleLinkClick}
              >
                Service
              </Link>
            </li>
            <li className="mt-10">
              <Link
                to="#howitworks"
                spy
                smooth
                offset={50}
                duration={500}
                onClick={handleLinkClick}
              >
                How-it-works
              </Link>
            </li>
            <li className="mt-10">
              <Link
                to="#subscribe"
                spy
                smooth
                offset={30}
                duration={500}
                onClick={handleLinkClick}
              >
                Subscribe
              </Link>
            </li>
            <li className="mt-10">Login</li>
            <button
              type="button"
              className="my-10 w-full rounded-full bg-nexa-yellow-800 px-5 py-2 "
            >
              Get Started
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Navbar;
