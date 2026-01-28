import CurriculumOverviewCard from "./CurriculumOverviewCard";

const curriculumCard = [
  {
    topic: "Human Capacity Building",
    content:
      "Structured training programs that develop skills, leadership, and professional competence for individuals, teams, and organizations seeking sustainable growth and impact.",
    pic: "capacity-training.jpg",
  },
  {
    topic: "Educational Consultancy",
    content:
      "Professional advisory services supporting institutions and organizations in curriculum design, training strategy, and educational program development.",
    pic: "consultant.jpg",
  },
  {
    topic: "Tutoring",
    content:
      "Personalized tutoring for kindergarten, primary, and secondary students. Tailored lessons to meet individual learning needs.",
    pic: "tutoring.jpg",
  },
];

const CurriculumOverview = () => {
  return (
    <div className="w-[90%] md:w-[85%]">
      <div className="w-full lg:w-[70%] space-y-5">
        <h2 className="font-playfair text-primary-color text-4xl md:text-5xl lg:text-6xl leading-12 md:leading-16">
          Curriculum Overview
        </h2>
        <p className="font-mulish text-lg text-primary-dark">
          At HigherFeats Africa, we offer a comprehensive suite of services
          designed to support students, teachers, and educational institutions
          at every stage of their journey.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ">
        {curriculumCard.map((card, index) => {
          return <CurriculumOverviewCard card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CurriculumOverview;
