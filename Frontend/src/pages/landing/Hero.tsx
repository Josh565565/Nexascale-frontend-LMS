/* eslint-disable prettier/prettier */

import dashboardImg from '@/assets/images/dashboardImg.png';

function Hero() {
  return (
    <section
      className="w-max-contianer h-[800px]
       min-h-screen mx-auto rounded-b-3xl flex flex-col  items-center "
    >
      <h1 className=" text-center capitalize max-sm:text-[50px] max-sm:leading[82]
       text-white font-poppins font-semi-bold text-7xl mt-40">
        Harness your potential with nexascale
      </h1>
      <p className=" font-atypTest font-medium text-center max-w-4xl leading-normal
      my-10 text-white text-2xl mx-auto max-sm:text-base ">
        Ready to elevate your skills? Seeking personalzed guidance to excel in your
      tech career or professional growth? Look no further.Welcome to Nexascale your-all-one 
      platform to mentor-guided learning
      and skill assessment</p>
      {/* max-sm:px-auto absolute top-[700px]  max-w-[90%] */}
      <div className="absolute top-[700px]">
        <img src={dashboardImg} alt="dashboard screenshot"
        className='object-contain ' 
        width={800}
        height={700}/>
      </div>
    </section>
  );
}

export default Hero;
