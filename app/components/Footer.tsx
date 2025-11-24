const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center py-20">
      <div className="w-[85%]">
        <div className="flex justify-between">
          <div className="w-[30%]">
            <div className="w-48 h-auto mx-auto">
              <img
                src="/assets/logo-one.png"
                alt="Picture of the author"
                className="w-full h-full"
              />
            </div>
            <p className="text-center font-mulish text-base">
              Our mission is to empower students, teachers, and educational
              institutions with the tools, resources, and support they need to
              succeed.
            </p>
          </div>
          <div className="w-[60%] flex justify-between mt-16">
            <div className="font-mulish ">
              <h4 className="text-lg font-bold">Products</h4>
              <ul className="mt-5 space-y-1.5">
                <li className="text-base">Tutoring</li>
                <li className="text-base">Exam Preparation</li>
                <li className="text-base">Training for Teachers and Schools</li>
                <li className="text-base">Educational Resources</li>
              </ul>
            </div>
            <div className="font-mulish">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="mt-5 space-y-1.5">
                <li className="text-base">Home</li>
                <li className="text-base">About</li>
                <li className="text-base">Educators Dialogue</li>
                <li className="text-base">Contact</li>
              </ul>
            </div>
            <div className="font-mulish">
              <h4 className="text-lg font-bold">Stay In Touch</h4>
              <ul className="mt-5 space-y-1.5">
                <li className="text-base">Facebook</li>
                <li className="text-base">LinkedIn</li>
                <li className="text-base">Instagram</li>
                <li className="text-base">Twitter</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <p className="text-base font-mulish text-[#7c7681]">
            Copyright © 2025 HigherFeats NG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
