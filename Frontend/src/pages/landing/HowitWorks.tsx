/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import { howItWork } from '@/constant';
import howItWorks from '../../assets/images/howItWorks.png';

const HowitWorks = () => {
  return (
    <div className="flex w-full flex-wrap gap-28 max-lg:flex-col">
      <div className="flex justify-center">
      <img src={howItWorks} alt="how it works" width={450} height={600} className="object-contain justify-center"/>
      </div>
      <div > 
        {howItWork.map((item) => (
          <div
          className="flex  flex-col justify-center items-center w-full mb-5"
            key={item.label}
          >
            <img src={item.imgURL} alt={item.label} width={50} height={70} />
            <h3 className='text-center capitalize text-3xl font-normal'>{item.label}</h3>
            <p className='text-center max-w-md mt-4'>{item.subtext}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowitWorks;
