import logo from '@/assets/images/Logo.png';

const Footer = () => {
  return (
    <section className="max-container ">
      <div className="flex flex-1 flex-wrap items-start justify-between max-lg:flex-col">
        <div className="flex flex-col">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <h4 className='mt-10 leading-normal text-white font-bold text-xl font-atypTest sm:max-w-sm'>
            We are impacting the future of tech talents</h4>
          <p className='sm:max-w-sm mt-3 text-white font-poppins'>We want to empower people with tools and opportunities needed to grow  and scale and their technology careers</p>
        </div>
        <div className=" flex flex-col text-white">
          <h4 className="text-2xl font-medium leading-normal">
            Connect with us
          </h4>
          <p className='leading-normal text-white mt-10 sm:max-w-sm'>If you'd like to volunteer or donate to any of our programs, 
          connect with us through any of these channel</p>
          <div className="flex gap-3">
            <ul>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
