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
    question: "Where does learning take place?",
    answer:
      "Online. Physically classes are available on request at a higher rate depending on location",
  },
  {
    id: 2,
    question: "Can I request a change of tutor if I don't want them?",
    answer:
      "Yes, after 1 month of trial except in cases of gross misconduct then they are changed immediately",
  },
  {
    id: 3,
    question: "How is payment made?",
    answer: "Payment is calculated and paid monthly",
  },
  {
    id: 4,
    question: "Are your tutors qualified teachers?",
    answer:
      "Our tutors are qualified teachers who have undergone training in pedagogy.",
  },
  {
    id: 5,
    question: "Can I register more than one child?",
    answer: "Payment is calculated and paid monthly",
  },
  {
    id: 6,
    question: "How much is the service?",
    answer: "N30,000 a month for two contacts weekly.",
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
