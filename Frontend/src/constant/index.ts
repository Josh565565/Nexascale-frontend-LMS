import personalised from '../assets/images/personalised.png';
import feedback from '../assets/images/feedback.png';
import development from '../assets/images/development.png';
import number1 from '../assets/images/number1.png';
import number2 from '../assets/images/number2.png';
import number3 from '../assets/images/number3.png';
import number4 from '../assets/images/number4.png';

export type Service = {
  imgURL: string;
  label: string;
  subtext: string;
};

export const services: Service[] = [
  {
    imgURL: personalised,
    label: 'personalised learning',
    subtext:
      'Our personalized learning approach involves our dedicated mentors creating tasks that are meticulously tailored to enrich your skills and knowledge all while considering your distinct goals and aspiration',
  },
  {
    imgURL: feedback,
    label: 'Expert feedback',
    subtext:
      'Experience constructive feedback and expert insights from our mentors. Learn about your strengths and areas for growth under the guidance of our experienced mentors',
  },
  {
    imgURL: development,
    label: 'skill development',
    subtext:
      'Our platform serves as a gateway to continuous improvement, offering a diverse range of tasks and subjects to help you sharpen your skills and broaden your knowledge',
  },
];

export const howItWork: Service[] = [
  {
    imgURL: number1,
    label: 'Sign Up',
    subtext:
      'Create your account on Nexascale and provde your learning objectives and preference',
  },
  {
    imgURL: number2,
    label: 'Recieve tasks',
    subtext:
      'Your mentor will assign you tasks tailored to your objectives and guide you through the learning process',
  },
  {
    imgURL: number3,
    label: 'submit your work',
    subtext:
      'complete your task and submt through your user friendly interface ',
  },
  {
    imgURL: number4,
    label: 'get graded',
    subtext:
      'Your mentor will access your work providing detailed feedback and grades',
  },
];
