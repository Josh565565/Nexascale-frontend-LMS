import { howItWork } from '@/constant';
import howItWorks from '../../assets/images/howItWorks.png';

const HowitWorks = () => {
  return (
    <div className="flex w-full flex-wrap justify-between max-lg:flex-col">
      <div className="flex justify-center">
        <img
          src={howItWorks}
          alt="how it works"
          width={450}
          height={600}
          className="justify-center object-contain"
        />
      </div>
      <div>
        {howItWork.map((item) => (
          <div
            className="mb-5  flex w-full flex-col items-center justify-center"
            key={item.label}
          >
            <img src={item.imgURL} alt={item.label} width={50} height={70} />
            <h3 className="text-center text-3xl font-normal capitalize">
              {item.label}
            </h3>
            <p className="mt-4 max-w-md text-center">{item.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowitWorks;
