const ConnectWith = () => {
  return (
    <div className="w-full flex justify-center bg-[#f1f3f4] py-20 md:py-28">
      <div className="w-[85%] space-y-10 lg:flex justify-between items-center">
        <div>
          <h1 className="font-playfair text-4xl md:text-5xl text-primary-color">
            Connect with
          </h1>
          <p className=" mt-2 md:mt-5 font-mulish text-lg text-primary-dark">
            #BeauvoirBears #WeAreBeauvoir
          </p>
        </div>
        <>
          <button className="bg-primary-color py-3 px-5 md:py-4 md:px-7 lg:py-5 lg:px-9 text-white text-xl font-mulish font-bold rounded-xl">
            Follow Us
          </button>
        </>
      </div>
    </div>
  );
};

export default ConnectWith;
