import logo from '@/assets/images/Logo.png';

const Footer = () => {
  return (
    <section className="max-container ">
      <div className="flex flex-1 flex-wrap items-start justify-between max-lg:flex-col">
        <div className="">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className=" flex flex-col text-white ">
          <h3 className="text-2xl font-medium leading-normal">Help</h3>
          <p>Contact us</p>
          <p>Terms & Condition</p>
          <p>Privacy policy</p>
        </div>
        <div className=" flex flex-col text-white ">
          <h3 className="text-2xl font-medium leading-normal">Contact us</h3>
          <p>
            <span />
            Phone-number
          </p>
          <p>
            <span />
            nexascale.com
          </p>
          <p>
            <span />
          </p>
        </div>
        <div className=" flex flex-col text-white">
          <h3 className="text-2xl font-medium leading-normal">
            Connect with us
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Footer;
