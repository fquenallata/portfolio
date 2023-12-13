import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiPhoneLine } from "react-icons/ri";

import project1 from "./assets/img/projecto 1.png";

import SkillImg1 from "./assets/skills/js.png";
import SkillImg2 from "./assets/skills/reactjs.png";
import SkillImg3 from "./assets/skills/CSS.png";
import SkillImg4 from "./assets/skills/html5.png";
import SkillImg5 from "./assets/skills/nodejs.png";
import SkillImg6 from "./assets/skills/postgresql.png";
import SkillImg7 from "./assets/skills/redux.png";
import SkillImg8 from "./assets/skills/git.png";

export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Portfolio",
    href: "portfolio",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

// social

export const social = [
  {
    icon: <FiLinkedin className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/franco-quenallata-2a2a11270/",
  },
  {
    icon: <FiGithub className="h-6 w-6" />,
    href: "https://github.com/fquenallata",
  },
];

//projects

export const projectsData = [
  {
    id: "1",
    image: project1,
    name: "HopPassion",
    category: "Full Stack",
    href: "https://hop-passion-client.vercel.app/",
    description:
      "This application is a beer e-commerce platform, providing users with a unique experience when buying their favorite brews.",
  },
];

export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

export const contact = [
  {
    icon: <FiMail />,
    title: "Do you have any question?",
    subtitle: "I am here to help you.",
    description: "Email me at quenallatafranco@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Buenos Aires, Argentina",
    description: "Serving clients worldwide",
  },
  {
    icon: <FaWhatsapp />,
    title: "Send me a message",
    subtitle: "I answer instantly",
    description: "+54 011 25413273",
  },
  {
    icon: <RiPhoneLine />,
    title: "Call me",
    subtitle: "For whatever you need",
    description: "+54 011 25413273",
  },
];
