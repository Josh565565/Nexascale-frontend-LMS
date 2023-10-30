import dashboardImg from '@/assets/images/dashboardImg.png';

function Hero() {
  return (
    <section
      id="/"
      className="w-max-contianer mx-auto
        flex h-[900px] flex-col items-center  rounded-b-3xl "
    >
      <h1
        className="  max-sm:leading[82] font-semi-bold mt-52 text-center
        font-poppins text-7xl capitalize text-white max-sm:text-[40px] "
      >
        Harness your potential with nexascale
      </h1>
      <p
        className="  mx-auto my-16 max-w-4xl text-center
      font-atypTest text-2xl font-medium leading-normal text-white max-sm:text-xl"
      >
        Ready to elevate your skills? Seeking personalzed guidance to excel in
        your tech career or professional growth? Look no further.Welcome to
        Nexascale your-all-one platform to mentor-guided learning and skill
        assessment
      </p>
      {/* max-sm:px-auto absolute top-[700px]  max-w-[90%] */}
      <div className="absolute top-[800px]">
        <img
          src={dashboardImg}
          alt="dashboard screenshot"
          className="object-contain "
          width={800}
          height={700}
        />
      </div>
    </section>
  );
}

export default Hero;
