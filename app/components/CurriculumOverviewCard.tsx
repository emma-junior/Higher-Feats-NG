const CurriculumOverviewCard = ({ card }: any) => {
  return (
    <div className="">
      <img
        className="w-full h-64 rounded-xl"
        src={`/assets/${card.pic}`}
        alt="curriculum picture"
      />
      <h3 className="text-2xl font-playfair text-primary-dark my-3.5">
        {card.topic}
      </h3>
      <p className="font-mulish text-base text-primary-dark">{card.content}</p>
    </div>
  );
};

export default CurriculumOverviewCard;
