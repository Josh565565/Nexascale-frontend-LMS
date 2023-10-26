import newsletter from '../../assets/images/newsletter.png';

const Newsletter = () => {
  return (
    <section
      id="#subscribe"
      className="max-container  flex items-center  justify-center gap-10 max-lg:flex-col "
    >
      <img src={newsletter} alt="newsletter" width={240} height={240} />
      <div className="text-center">
        <h3 className="font-lato text-3xl font-bold">
          Subscribe to our newsletter
        </h3>
        <p className="max-w-lg pt-8">
          Get all update from nexascale community by subscribing to our
          newsletter
        </p>
        <div className="mt-8 flex w-full justify-center gap-8 max-sm:flex-col">
          <div className="rounded-md  p-2.5 sm:border sm:border-slate-gray">
            <input type="text" placeholder="yoremail.com" className="input" />
          </div>
          <button
            type="submit"
            className="rounded-md bg-nexa-yellow-800 px-5 max-sm:py-5 "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
// import newsletter from '../../assets/images/newsletter.png';

// const Newsletter = () => {
//   return (
//     <section className="flex  justify-center gap-10">
//       <img src={newsletter} alt="newsletter" />
//       <div className="">
//         <h3 className="font-lato text-3xl font-bold">
//           Subscribe to our newsletter
//         </h3>
//         <p className="max-w-lg pt-8">
//           Get all update from nexascale community by subscribing to our
//           newsletter
//         </p>
//         <div className="mt-8 flex w-full gap-8">
//           <div className="sm:border-slate-gray -3/5  w-[300px] rounded-md p-2.5 sm:border">
//             <input type="text" placeholder="yoremail.com" className="input" />
//           </div>
//           <button type="submit" className="rounded-md bg-nexa-yellow-800 p-5">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;
