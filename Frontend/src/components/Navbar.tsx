/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0  z-10 overflow-hidden">
      <nav className=" mx-auto mt-10 flex h-[64px] w-11/12 items-center 
      justify-between rounded-full bg-white px-8 cursor-pointer">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="flex  items-center justify-center gap-10 max-lg:hidden font-lato font-normal text-lg">
          
          <li className="">Service</li>
          <li className="">How-it-works</li>
          <li className="">Subscribe</li>
          <li className="">Login</li>
          <button type='button'
          className='bg-nexa-yellow-800 px-5 py-2 rounded-full text-white'>Get Started</button>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
