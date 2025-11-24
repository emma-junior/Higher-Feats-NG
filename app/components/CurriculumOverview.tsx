import CurriculumOverviewCard from "./CurriculumOverviewCard";

const curriculumCard = [
  {
    topic: "Tutoring",
    content:
      "Personalized tutoring for kindergarten, primary, and secondary students. Tailored lessons to meet individual learning needs.",
    pic: "tutoring.jpg",
  },
  {
    topic: "Exam Preparation",
    content:
      "Comprehensive preparation programs for critical exams. Expert guidance and practice materials. Strategies to boost confidence and performance.",
    pic: "exam-prep.jpg",
  },
  {
    topic: "Comprehensive preparation programs for critical exams.",
    content:
      "Professional development workshops and seminars. Innovative teaching strategies and classroom management techniques.",
    pic: "female-teacher.webp",
  },
];

const CurriculumOverview = () => {
  return (
    <div className="w-[85%]">
      <div className="w-[70%] space-y-5">
        <h2 className="font-playfair text-primary-color text-6xl leading-16">
          Curriculum Overview
        </h2>
        <p className="font-mulish text-lg text-primary-dark">
          At HigherFeats NG, we offer a comprehensive suite of services designed
          to support students, teachers, and educational institutions at every
          stage of their journey.
        </p>
      </div>
      <div className="md:flex justify-between mt-12">
        {curriculumCard.map((card, index) => {
          return <CurriculumOverviewCard card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CurriculumOverview;
