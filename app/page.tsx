import ConnectWith from "./components/ConnectWith";
import CurriculumOverview from "./components/CurriculumOverview";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import LearningBeginsWithUS from "./components/LearningBeginsWithUS";
import UpcomingTraning from "./components/UpcomingTraning";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center py-20 space-y-20 md:py-28 lg:space-y-28">
        <LearningBeginsWithUS />
        <CurriculumOverview />
        <UpcomingTraning />
        <Faq />
        <ConnectWith />
      </div>
    </>
  );
}
