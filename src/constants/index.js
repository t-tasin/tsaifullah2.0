import multi_agent_av from "../assets/multi_agent_avs.jpg";
import ai_parking from "../assets/ai_parking.jpg";
import ai_gym from "../assets/ai_gym_trainer.jpg";
import delivery_system from "../assets/delivery_system.jpg";
import ai_classroom from "../assets/ai_classroom_att.jpg";
import social_media from "../assets/social_media.jpg";
import gummy_ball from "../assets/gummy_ball.png";

export const HERO_CONTENT = `I’m KM Khalid Saifullah (Tasin), a passionate software engineer who thrives on creating scalable, secure, and innovative systems. From AI-driven solutions to real-time applications, I’m committed to solving complex problems and delivering impact.`;

export const ABOUT_TEXT = `I am a dedicated computer science and business economics student at The College of Wooster, with a proven track record of developing cutting-edge systems that drive efficiency and innovation. With experience in AI, machine learning, and full-stack development, I’ve contributed to high-impact projects at companies like Schneider Electric and Jomee Jomaa Inc., while also leading key initiatives in my personal research on autonomous vehicles. I specialize in building secure, user-centric applications, and I’m driven by a passion for technology and problem-solving.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - July 2024",
    role: "AI/ML Scientist Intern",
    company: "Schneider Electric",
    description: `At Schneider Electric, I developed autonomous agent systems leveraging Python, LlamaIndex, and GPT-4, enhancing task efficiency and decision-making for complex planning processes. I collaborated with a cross-functional team to align deliverables with long-term strategic goals.`,
    technologies: [
      "Python",
      "LlamaIndex",
      "CrewlAI",
      "AutoGen",
      "GPT-4",
      "Llama3",
      "Autnomous Agent Systems",
    ],
  },
  {
    year: "May 2023 - December 2023",
    role: "Software Engineer Intern",
    company: "Jomee Jomaa Inc.",
    description: `I led the implementation of advanced JWT authentication with rotating refresh tokens, elevating security standards. I also built 30+ scalable APIs using Django, which improved performance and boosted website optimization from 72% to 96% on Lighthouse.`,
    technologies: [
      "Python",
      "Django",
      "JWT",
      "Django REST Framework",
      "PostgreSQL",
      "APIs",
    ],
  },
  {
    year: "Jan 2023 – Apr 2023",
    role: "Software Engineer Intern",
    company: "Shiree Pvt. Ltd.",
    description: `Designed a ReactJS dashboard that streamlined hiring workflows, improving efficiency by 25%. I also developed D3.js visualizations that empowered recruiters with actionable insights to enhance decision-making processes.`,
    technologies: ["ReactJS", "D3.js", "JavaScript", "HTML/CSS", "NodeJS"],
  },
];

export const PROJECTS = [
  {
    title: "Multi-Agent Interaction: Autonomous Vehicles",
    image: multi_agent_av,
    description:
      "I’m researching and developing protocols for seamless communication and decision-making between autonomous vehicles using Carla and Python. This project aims to revolutionize traffic management by leveraging V2X communication and machine learning.",
    technologies: [
      "Python",
      "Carla",
      "PyTorch",
      "ROS",
      "V2X Communication",
      "Machine Learning",
      "Unreal Engine",
    ],
  },
  {
    title: "ShutterShare",
    image: social_media,
    description:
      "Built a secure video-sharing platform that integrates Google OAuth 2.0 for seamless authentication. The platform includes over 20 reusable components, enhancing user experience and simplifying development.",
    technologies: [
      "TypeScript",
      "ReactJS",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Appwrite",
      "Google API",
    ],
  },
  {
    title: "AI Gym Trainer",
    image: ai_gym,
    description:
      "Developed an AI-driven fitness trainer that uses Python and the ‘mediapipe’ framework to detect body posture and analyze workout angles. The trainer tracks perfect reps and provides real-time feedback, enhancing user experience.",
    technologies: [
      "Python",
      "NumPy",
      "OpenCV",
      "mediapipe",
      "Machine Learning",
    ],
  },
  {
    title: "Automated Live Classroom Attendance System",
    image: ai_classroom,
    description:
      "Created an automated system using OpenCV and Python that recognizes faces with 97% accuracy, logging attendance in real-time to streamline classroom management.",
    technologies: [
      "Python",
      "NumPy",
      "OpenCV",
      "Machine Learning",
      "Face Recognition",
    ],
  },
  {
    title: "Automated Live Parking Availability Finder",
    image: ai_parking,
    description:
      "Built a parking management system that identifies available spaces using real-time video feed analysis with 96% accuracy, enhancing parking efficiency.",
    technologies: ["Python", "OpenCV", "NumPy", "cvzone"],
  },
  {
    title: "Gummy Ball Adventure Game",
    image: gummy_ball,
    description:
      "Developed a pixel-art adventure game inspired by retro Nokia games using Python and PyGame, creating a fun and visually engaging gaming experience..",
    technologies: ["Python", "PyGame", "Aseprite", "Game Development"],
  },
  {
    title: "Dominato’s Computerized Delivery System",
    image: delivery_system,
    description:
      "Collaborated on a pizza delivery project using C++ data structures, optimizing driver tracking and order management with a queue-based system.",
    technologies: [
      "C++",
      "Data Structures",
      "Queue",
      "Algorithm Design",
      "UML",
      "Linked List",
    ],
  },
];

export const CONTACT = {
  address: "1189 Beall Ave, Wooster, OH 44691",
  email: "tasin0.net@gmail.com",
};
