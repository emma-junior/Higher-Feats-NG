import { aboutus, aboutusType } from "../data/data";

export default function About() {
  return (
    <section className="flex flex-col items-center py-10 space-y-20 md:py-28 md:space-y-28">
      <div className="w-[90%] md:w-[85%]">
        <>
          <div className="w-full md:w-[60%] lg:w-[37%]">
            <h2 className="font-playfair text-4xl text-primary-color">
              About Higher Feats Africa
            </h2>
            <p className="mt-5 font-mulish text-lg/7">
              At HigherFeats Africa, we believe that education is the
              cornerstone of a brighter future. Our mission is to empower
              students, teachers, and educational institutions with the tools,
              resources, and support they need to succeed. Whether you’re
              looking for top-notch tutoring, comprehensive exam preparation,
              professional training, or quality educational materials, we are
              here to help you achieve your goals. Join us in shaping the future
              of education today!
            </p>
          </div>
        </>
      </div>
      <div className="py-24 w-full bg-[#f1f3f4] flex justify-center">
        <div className="w-[90%]  md:w-[85%] lg:flex lg:items-stretch">
          <div className="lg:w-[50%] grid grid-cols-1 md:grid-cols-2">
            {aboutus.map((about: aboutusType) => (
              <div
                key={about.serialNum}
                className={`w-80 px-5 py-7 md:py-10 md:px-10 space-y-3.5 ${
                  about.serialNum === "02" ? "bg-white" : ""
                } ${about.serialNum === "03" ? "md:bg-white" : ""}`}
              >
                <p className="text-sm text-primary-color">{about.serialNum}</p>
                <p className="font-mulish text-2xl font-semibold text-primary-dark">
                  {about.topic}
                </p>
                <p className="font-mulish text-primary-dark text-base">
                  {about.content}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:w-[50%] flex h-[500px] md:h-[720px] -ml-1">
            <img
              className="h-full w-full object-cover"
              src="/assets/founder.jpg"
              alt="founder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
