import logo from '@/assets/images/Logo.png';
import { Mail, Twitter, Instagram, Facebook } from 'react-feather';

const Footer = () => {
  return (
    <section className="max-container ">
      <div className="flex flex-1 flex-wrap items-start justify-between  max-lg:flex-col">
        <div className="flex flex-col max-lg:mb-10">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <h4 className="mt-7 font-atypTest text-xl font-medium leading-normal text-nexa-white sm:max-w-sm">
            We are impacting the future of tech talents
          </h4>
          <p className="mt-3 font-poppins text-nexa-white sm:max-w-sm">
            We want to empower people with tools and opportunities needed to
            grow and scale and their technology careers
          </p>
        </div>
        <div className=" flex flex-col text-nexa-white max-lg:mb-10">
          <h4 className="text-2xl font-medium leading-normal">
            Connect with us
          </h4>
          <p className="mt-7 leading-normal text-nexa-white sm:max-w-sm">
            If you would like to volunteer or donate to any of our programs,
            with us through any of these channel
          </p>
          <ul className="mt-3 flex gap-10">
            <li>
              <a
                href="mailto:info@nexascale.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/NexascaleHQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter fill="white" size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/Nexascale"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Nexascale"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook fill="white" size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-nexa-white">
          <h4 className="text-2xl font-medium leading-normal ">Quick links</h4>
          <ul className="mt-7 text-lg">
            <li>
              <a
                href="https://www.nexascale.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="https://www.nexascale.org/program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our programs
              </a>
            </li>
            <li>
              <a
                href="https://nexascale.org/get-involved"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Involved
              </a>
            </li>
            <li>
              <a
                href="https://nexascale.org/donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
