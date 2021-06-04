import articles from "./articles";
import projects from "./projects";

import { MdLaptopMac } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const TEXT = {
  introduction: {
    name: "Wassef Ben Ahmed",
    description:
      " Hi, I am Wassef <br /> A <b>fullstack </b> devepoler, based in Tunisia.",
    underline: "911",
  },
  about: {
    header: "About me",
    description:
      "I'm a sophomore computer science student, constantly seeking more knowledge, currently pursuing a bachelor's degree in Data Science & Big Data Analytics. FullStack developer, blogger, and open source contributor. I enjoy working full stack currently interested in serverless architectures.",
    timeline: [
      {
        title: "GitHub's Tunisian Community",
        subTitle: "Co-Founder",
        description:
          "A community of students passionate about technologies, our goal is to fill the gap between what we learn in university and what the job market actually requires.",
        Icon: FiGithub,
      },
      {
        title: "Bachelor Degree",
        subTitle: "Big Data Analytics",
        description:
          "Higher Institute of Computer Science and Multimedia of Sfax.",
        Icon: MdLaptopMac,
      },
      {
        title: "High School Degree",
        subTitle: "Computer Science Section",
        description: null,
        Icon: BsPersonCheckFill,
      },
    ],
  },
  showcase: {
    headers: ["Projects", "Articles"],
    articles,
    projects,
  },
};

export default TEXT;
