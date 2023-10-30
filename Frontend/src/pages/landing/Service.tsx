import ServicesCard from '@/components/ServicesCard';
import { services } from '@/constant';

const Service = () => {
  return (
    <section className="max-container pt-80 max-xl:pt-40 " id="#service">
      <div className="flex flex-col items-center justify-center">
        <h2 className="  font-poppins text-4xl font-bold">Why Nexascale</h2>
        <div className="my-14 flex  justify-center gap-9 max-lg:flex-col ">
          {services.map((service) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ServicesCard key={service.label} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
