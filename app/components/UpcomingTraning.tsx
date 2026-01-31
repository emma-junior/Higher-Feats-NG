import Link from "next/link";

const UpcomingTraning = () => {
  return (
    <div className="w-[90%] md:w-[85%] lg:flex justify-between ">
      <div className="w-full lg:w-[45%] pr-3">
        <p className=" uppercase text-2xl font-playfair text-primary-color">
          upcoming training
        </p>
        <div className="mt-7 lg:mt-16 mb-7 lg:mb-0">
          <h2 className="capitalize text-4xl lg:text-5xl xl:text-6xl font-mulish font-bold text-primary-dark">
            train the trainer
          </h2>
          <div className="my-3">
            <p className="text-primary-dark text-base">
              Become a certified professional trainer with Higherfeats Africa.
            </p>
            <p className="text-primary-dark text-base">
              Reach out to book your session.
            </p>
          </div>
          <button className="bg-primary-color py-2 px-4 md:px-8 text-white text-base font-mulish font-bold rounded-lg mt-6 xl:mt-0 hover:shadow-lg hover:opacity-90 cursor-pointer">
            <Link className="" href="/contact-us">
              Contact
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[55%]">
        <img
          className="w-full h-[500px] md:h-[600px] xl:h-[700px]"
          src="/assets/train-the-trainer.jpeg"
          alt="flyer"
        />
      </div>
    </div>
  );
};

export default UpcomingTraning;
