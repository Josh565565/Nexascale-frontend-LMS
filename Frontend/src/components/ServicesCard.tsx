import { Service } from '@/constant';

const ServicesCard: React.FC<Service> = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full flex-1 justify-center rounded-md bg-white p-10 shadow-xl ">
      <div className="flex justify-center">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="mt-5 text-center font-atypTest text-xl font-medium capitalize leading-normal ">
        {label}
      </h3>
      <p className=" mt-6 max-w-sm text-center">{subtext}</p>
    </div>
  );
};

export default ServicesCard;
