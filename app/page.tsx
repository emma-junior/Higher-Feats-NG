import ConnectWith from "./components/ConnectWith";
import CurriculumOverview from "./components/CurriculumOverview";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import LearningBeginsWithUS from "./components/LearningBeginsWithUS";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center py-28 space-y-28">
        <LearningBeginsWithUS />
        <CurriculumOverview />
        <Faq />
        <ConnectWith />
      </div>
    </>
  );
}
