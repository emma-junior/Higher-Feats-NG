import MarqueeImgSlider from "../components/MarqueeImgSlider";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const EducatorsDialogue = () => {
  const eventImages = [
    "/assets/event-highlights/conference-one.jpg",
    "/assets/event-highlights/conference-two.jpg",
    "/assets/event-highlights/conference-three.jpg",
    "/assets/event-highlights/conference-four.jpg",
    "/assets/event-highlights/conference-five.jpg",
    "/assets/event-highlights/conference-six.jpg",
    "/assets/event-highlights/conference-seven.jpg",
    "/assets/event-highlights/conference-eight.jpg",
    "/assets/event-highlights/conference-nine.jpg",
    "/assets/event-highlights/conference-ten.jpg",
  ];

  return (
    <div className="">
      <div className="relative overflow-hidden w-full h-[92vh] video-one ">
        <img
          src="/assets/educators-conference.jpg"
          className="w-full h-full absolute top-0 left-0 object-cover"
        ></img>
        <div className="absolute inset-0 bg-black/40 md:bg-black/60"></div>
      </div>

      <div className="absolute inset-0 flex flex-col top-[60%] lg:top-[65%] left-[7%] w-[85%]">
        <h1 className="text-white text-2xl md:text-6xl font-bold font-mulish md:leading-16">
          Educators Dialogue <br />
          Conference
        </h1>
        <div className=" xl:flex justify-between">
          <p className="font-mulish text-white mt-2 md:mt-4 text-sm md:text-xl">
            Bringing Together Education Stakeholders to Shape the Future
          </p>
          <Link
            className=""
            href="https://forms.gle/8RJTBS41eQcz3E196"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-primary-color py-2 px-4 md:py-3 md:px-5 text-white text-base font-mulish font-bold rounded-lg mt-6 xl:mt-0 hover:shadow-lg hover:opacity-90 cursor-pointer">
              Register Now
            </button>
          </Link>
        </div>
      </div>
      <div className="py-20 space-y-20 md:py-28 md:space-y-28">
        <div>
          <div className="w-[90%] md:w-[85%] xl:flex justify-between mx-auto mb-7">
            <h2 className="flex text-4xl md:text-5xl font-playfair text-primary-color items-center ">
              Upcoming Conference
            </h2>
            <p className="w-full md:w-[85%] lg:w-[70%] xl:w-[35%] text-lg xl:text-base font-mulish mt-7 xl:mt-0">
              Join us every August for the Educators Dialogue, a premier
              conference that gathers educators, administrators, policymakers,
              and other stakeholders in education. This annual event is a
              platform for discussing prevailing issues, sharing innovative
              solutions, and charting the way forward for education.
            </p>
          </div>
          <MarqueeImgSlider eventImages={eventImages} />
        </div>
        <div className="w-[90%] md:w-[85%] xl:flex justify-between mx-auto">
          <div className="w-full xl:w-[50%]">
            <h2 className="text-4xl text-primary-dark font-playfair mb-4">
              Why Attend?
            </h2>
            <ul className="space-y-2">
              <li className="text-lg flex items-center">
                <FaArrowRightLong
                  // size={20}
                  className="mr-4 text-primary-color text-4xl"
                />{" "}
                Insightful Discussions: Engage in thought-provoking
                conversations about the latest trends and challenges in
                education.
              </li>
              <li className="text-lg flex items-center">
                <FaArrowRightLong
                  // size={20}
                  className="mr-4 text-primary-color text-3xl"
                />{" "}
                Networking Opportunities: Connect with fellow educators,
                industry experts, and policymakers.
              </li>
              <li className="text-lg flex items-center">
                <FaArrowRightLong
                  // size={20}
                  className="mr-4 text-primary-color text-3xl"
                />{" "}
                Innovative Solutions: Discover new strategies and tools to
                enhance educational outcomes.
              </li>
              <li className="text-lg flex items-center">
                <FaArrowRightLong
                  // size={20}
                  className="mr-4 text-primary-color text-3xl"
                />{" "}
                Professional Development: Gain valuable insights and skills to
                improve your practice.
              </li>
            </ul>
          </div>
          <div className="w-full xl:w-[45%] mt-10 xl:mt-0">
            <h2 className="text-4xl text-primary-dark font-playfair mb-4">
              Event Highlights
            </h2>
            <ul className="space-y-2">
              <li className="text-lg flex items-center">
                <FaArrowRightLong className="mr-3.5 text-primary-color" />{" "}
                Keynote speeches by leading figures in education.
              </li>
              <li className="text-lg flex items-center">
                <FaArrowRightLong className="mr-3.5 text-primary-color" /> Panel
                discussions with experts and practitioners.
              </li>
              <li className="text-lg flex items-center">
                <FaArrowRightLong className="mr-3.5 text-primary-color" />{" "}
                Interactive workshops and breakout sessions.
              </li>
              <li className="text-lg flex items-center">
                <FaArrowRightLong className="mr-3.5 text-primary-color" />{" "}
                Exhibitions showcasing the latest educational products and
                services.
              </li>
            </ul>
            <Link
              className=""
              href="https://forms.gle/8RJTBS41eQcz3E196"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-5 bg-primary-color py-2 px-4 text-white text-base font-mulish font-bold rounded-lg hover:shadow-lg hover:opacity-90 cursor-pointer">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorsDialogue;
