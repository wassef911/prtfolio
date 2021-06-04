import articles from "./articles";
import projects from "./projects";

import { MdLaptopMac } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";

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
      "My name is Wassef, I'm a computer science student who is constantly seeking more knowledge. Open source contributor ,web developer and a dev.to blogger, writing articles explaining computer science concepts. I enjoy working fullstack currently interested in serverless architectures.",
    timeline: [
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
