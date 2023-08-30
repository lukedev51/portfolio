import { FaReact, FaAngular } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import textIQ from "./assets/projects/textiq.png";
import lob from "./assets/projects/lob.png";
import worklete from "./assets/projects/worklete.png";
import loungebuddy from "./assets/projects/loungebuddy.png";
import rolfsonoil from "./assets/projects/rolfsonoil.png";

export const NUM_0 = 0;
export const NUM_1 = 1;
export const NEG_NUM_1 = -1;

export const skills = [
  { type: "JavaScript", level: 98 },
  { type: "TypeScript", level: 98 },
  { type: "React.js", level: 98 },
  { type: "React Native", level: 95 },
  { type: "Redux", level: 98 },
  { type: "Next.js", level: 95 },
  { type: "Frontend Dev", level: 96 },
  { type: "Backend Dev", level: 92 },
  { type: "Angular", level: 88 },
  { type: "Vue.js", level: 88 },
  { type: "ES6+", level: 98 },
  { type: "Game Design", level: 83 },
  { type: "Game Dev", level: 95 },
  { type: "Tailwind CSS", level: 95 },
  { type: "GraphQL", level: 95 },
  { type: "AWS", level: 85 },
  { type: "Node.js", level: 85 },
  { type: "jQuery", level: 98 },
  { type: "HTML/HTML5", level: 98 },
  { type: "CSS/CSS3", level: 98 },
  { type: "Bootstrap", level: 98 },
  { type: "Styled-Components", level: 98 },
  { type: "C#/ASP.NET", level: 90 },
  { type: "Ionic Framework", level: 90 },
  { type: "Flutter/Dart", level: 75 },
  { type: "Webflow", level: 92 },
  { type: "MongoDB", level: 92 },
  { type: "WordPress", level: 78 },
  { type: "PHP", level: 75 },
  { type: "MySQL", level: 75 },
];

export const works = [
  {
    title: "Senior Frontend Engineer",
    subTitle: "TextIQ, Inc (Relativity ODA, LLC)",
    date: "Aug 2021 - May 2023",
    content:
      "React.js, Redux, TypeScript, Material-UI, HTML5/CSS3, Angular10, RxJS, D3.js, Data Visualization, Figma, Next.js, Styled-Components",
    icon: FaAngular,
    alt: "angular",
  },
  {
    title: "Senior UI Engineer (Webflow)",
    subTitle: "Lob, Inc",
    date: "Oct 2020 - Jun 2021",
    content:
      "Webflow, UIKit, JavaScript, jQuery, HTML, CSS, Third-party integration, API integration, CSS Animations, Maketo, Greenhouse Job Board",
    icon: SiWebflow,
    alt: "react",
  },
  {
    title: "Senior React-Native Developer",
    subTitle: "Worklete, Inc",
    date: "Apr 2020 - Aug 2020",
    content:
      "React.js, Redux, React-Native, Test-Driven Development, Eva Design System, FCM, Firebase, Clean Codebase",
    icon: FaReact,
    alt: "react",
  },
  {
    title: "Senior Software Engineer",
    subTitle: "Rolfson Oil, LLC",
    date: "Feb 2018 - Mar 2020",
    content:
      "React.js, Redux, Redux-Thunk, React-Native CLI, HTML5, CSS3, Material-UI, React-Printer, React DnD, .Net Core API, Data Visualization, Recharts",
    icon: FaReact,
    alt: "react",
  },
  {
    title: "Senior Frontend Engineer",
    subTitle: "LoungeBuddy, Inc",
    date: "Feb 2017 - Jan 2018",
    content:
      "React, Angular, Redux, Redux-Saga, TypeScript, Axios, ZenDesk, Marketo Form, React-Native, Frontend Development",
    icon: FaReact,
    alt: "react",
  },
  {
    title: "Fullstack JavaScript Engineer",
    subTitle: "Freelancer",
    date: "Jan 2014 - Feb 2017",
    content:
      "React, Vue, Angular, Node, React Native, HTML5, CSS3, Bootstrap, Material-UI, Frontend Development, Backend Development",
    icon: CgWebsite,
    alt: "web",
  },
];

export const projects = [
  {
    name: "TextIQ, Inc",
    description: `
      ● Contributed to the architecture and development of the TextIQ app deploying AI deploying AI to uncover and contextualize sensitive data across privacy, security, legal, and compliance.
      ● Built an Excel review product with React.js, Redux, TypeScript, Material-UI, HTML5/CSS3, etc.
      ● Mentored several Junior developers, reviewed GitHub PRs, and led the weekly demo meetings.
      ● Refactored a very huge codebase based on the best practices.
      ● Worked on updating an admin dashboard with Angular10, TypeScript, and RxJS, and implemented complicated charts for data visualization using D3.js.
      ● Implemented pixel-perfect and mobile-friendly Figma designs with Next.js, React.js, HTML5/CSS3, Styled-Components, etc.
    `,
    image: textIQ,
    link: "https://www.relativity.com/data-solutions/textiq/",
  },
  {
    name: "Lob, Inc",
    description: `
      ● Migrated existing website assets to Webflow and collaborated with a senior visual designer.
      ● Updated the look and feel of the website to use new design guidelines and assets.
      ● Integrated third-party systems into Lob’s public website (Maketo forms, greenhouse job board, Lob API Documentation, and Lob API examples)
    `,
    image: lob,
    link: "https://www.lob.com/",
  },
  {
    name: "Worklete, Inc",
    description: `
      ● Implemented pixel-perfect designs with React Native UI library based on the Eva Design System.
      ● Refactored the existing codebase based on the best practices and focused on test-driven development.
      ● Added Firebase backend functions with Firebase administration.
      ● Implemented push notifications for both iOS and Android platforms using FCM (Firebase Cloud Messaging).
    `,
    image: worklete,
    link: "https://worklete.com/",
  },
  {
    name: "Rolfson Oil, LLC",
    description: `
      ● Built web and mobile front-end pages using React, Redux, Redux-thunk, React Native CLI, HTML5/CSS3, React-Material-UI, etc.
      ● Developed React-Native iOS/Android apps that help drivers manage their tickets.
      ● Enabled the mobile app to connect to the Bluetooth printers to print tickets.
      ● Fixed an iPad issue for the React-Printer plugin.
      ● Created React components with Recharts to support interactive visualizations of data projections and analytics.
      ● Reactored a very huge codebase to make it more modular and reusable.
      ● Implemented .Net Core backend APIs.
    `,
    image: rolfsonoil,
    link: "https://rolfsonoil.com/",
  },
  {
    name: "LoungeBuddy",
    description: `
      ● Built responsive and mobile-friendly web frontend pages with React.js, Redux, HTML5/CSS3, SCSS, etc.
      ● Worked on migrating Angular to React without a massive rewrite.
      ● Integrated Backend API with Redux-Saga and Axios and 3rd party systems like Greenhouse, Zendesk, Marketo forms, etc.
      ● Built an iOS app with React-Native, React, Redux-Thunk, React-Native plugins, etc.
      ● Designed the entire mobile application to be able to function offline for long periods of time and sync data back once in cell reception (online).
      ● Integrated Unit Testing with Jest and increased testing coverage of the existing application Cypress.
    `,
    image: loungebuddy,
    link: "https://loungebuddy.com/",
  },
];
