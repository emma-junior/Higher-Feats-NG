export interface faqType {
  id: number;
  question: string;
  answer: string;
}

export interface aboutusType {
  serialNum: string;
  topic: string;
  content: string;
}

export const faq = [
  {
    id: 1,
    question: "Who can participate in Higherfeats Africa’s training programs?",
    answer:
      "Our training programs are designed for individuals, professionals, educators, organizations, institutions, and corporate teams seeking capacity development, leadership growth, and skills enhancement.",
  },
  {
    id: 2,
    question: "Are your training programs delivered online or in person?",
    answer:
      "Our programs are delivered through flexible formats including physical (in-person), virtual (online), and hybrid learning models, depending on the nature of the program.",
  },
  {
    id: 3,
    question:
      "Do you offer customized training for organizations and institutions?",
    answer:
      "Yes. We design and deliver customized training and capacity-building solutions tailored to the specific needs, goals, and context of organizations and institutions.",
  },
  {
    id: 4,
    question: "Who facilitates your training programs?",
    answer:
      "Our programs are facilitated by experienced educators, industry professionals, and subject-matter experts with proven expertise in training, leadership development, and organizational capacity building.",
  },
  {
    id: 5,
    question: "How do I register for a training program or event?",
    answer:
      "Registration for our programs and events is completed online through the relevant registration link on our website. Registered participants receive confirmation and further details via email.",
  },
  {
    id: 6,
    question: "Are certificates provided after training programs?",
    answer:
      "Yes. Participants receive certificates of participation or completion for eligible programs, subject to attendance and program requirements.",
  },
  {
    id: 7,
    question: "How are training fees structured?",
    answer:
      "Training fees vary depending on the program, delivery format, and scope. Detailed fee information is provided on each program page or upon request for customized training.",
  },
  {
    id: 8,
    question: "How can organizations partner with Higherfeats Africa?",
    answer:
      "Organizations and institutions can partner with us by contacting us through the website or sending a formal inquiry via email. Our team will respond to discuss partnership opportunities.",
  },
];

export const aboutus = [
  {
    serialNum: "01",
    topic: "Our mission",
    content:
      "Our mission is to provide exceptional educational services that inspire and equip learners and educators to excel. We strive to create an environment where students thrive, teachers are empowered, and educational standards are continually raised.",
  },
  {
    serialNum: "02",
    topic: "Our values",
    content:
      "HigherFeats Africa was founded with a simple yet powerful vision: to transform education through innovative solutions and unwavering commitment. We understand that education is the key to unlocking potential and creating opportunities for individuals and communities alike.",
  },
  {
    serialNum: "03",
    topic: "Our commitment",
    content:
      "We are committed to the future of education, and we believe that by working together with students, educators, and communities, we can create a brighter tomorrow.",
  },
];
