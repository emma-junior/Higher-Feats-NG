const Hero = () => {
  return (
    <div className="  w-full">
      <div className="video-container w-full h-[90vh] video-one ">
        <video
          src="/assets/hero-vid-one.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full absolute top-0 left-0 object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/40 md:bg-black/60"></div>
      </div>

      <div className="absolute inset-0 flex flex-col top-[60%] lg:top-[65%] left-[7%] w-[80%] md:w-[50%] lg:w-[40%]">
        <h1 className="text-white text-2xl md:text-4xl font-bold font-mulish">
          Business consulting, with a difference.
        </h1>
        <p className="font-mulish text-white mt-4 text-base">
          Whether you’re an international corporation or a small startup, our
          agile approach to problem-solving and strategic planning will help you
          to scale new heights and shape change
        </p>
      </div>
    </div>
  );
};

export default Hero;
