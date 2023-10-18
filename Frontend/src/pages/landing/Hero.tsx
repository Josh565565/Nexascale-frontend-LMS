/* eslint-disable prettier/prettier */

import dashboardImg from '@/assets/images/dashboardImg.png';

function Hero() {
  return (
    <section
      className="w-max-contaner padding-t 
      h-screen  bg-nexa-green mx-auto  rounded-b-3xl flex flex-col  items-center"
    >
      <h1 className=" text-center capitalize max-sm:text[72px] max-sm:leading[82]
       text-white font-poppins font-semi-bold text-5xl mt-36">
        Harness your potential with nexascale
      </h1>
      <p className=" font-atypTest font-medium text-center max-w-4xl leading-relaxed 
      mt-10 text-white text-xl mx-auto padding-b">
        Ready to elevate your skills? Seeking personalzed guidance to excel in your
      tech career or professional growth?Look no further.Welcome to Nexascale your-all-one 
      platform to mentor-guided learning
      and skill assessment</p>
      <img src={dashboardImg} alt="dashboard screenshot"
      className='object-contain max-sm:px-auto ' 
       width={700}
       height={600}/>
    </section>
  );
}

export default Hero;
