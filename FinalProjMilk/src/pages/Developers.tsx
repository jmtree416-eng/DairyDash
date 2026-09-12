import PageLayout from "../components/PageLayout";
import "./Developers.css";
import morleyPhoto from "../assets/Profiles/morley.png";
import gianPhoto from "../assets/Profiles/gianpic.jpg";
import navarroPhoto from "../assets/Profiles/yuu.jpg";
import ariannePhoto from "../assets/Profiles/arianne.jpg";
import nemarlPhoto from "../assets/Profiles/nemarl.jpeg";

interface Developer {
  name: string;
  role: string;
  description: string;
  photo?: string; // add a real photo later: import it and set this field
}

const developers: Developer[] = [
  {
    name: "Morley Sibal",
    role: "Lead Developer and Backend Developer",
    description:
      "Led the core architecture and guided the team through delivery.",
    photo: morleyPhoto,
  },
  {
    name: "Gian Bautista",
    role: "Frontend and Backend Developer",
    description:
      "Developed the user interface and implemented backend functionality.",
    photo: gianPhoto,
  },
  {
    name: "Navarro Yu",
    role: "Frontend Developer and UI/UX Designer",
    description:
      "Designed the user interface and ensured a seamless user experience.",
    photo: navarroPhoto,
  },
  {
    name: "Arianne Kaye Tupaen",
    role: "Frontend Developer and UI/UX Designer",
    description:
      "Contributed to the frontend development and assisted in UI/UX design.",
    photo: ariannePhoto,
  },
  {
    name: "Nemarl Villafrance",
    role: "UI/UX Designer and QA Tester",
    description:
      "Focused on user experience design and conducted quality assurance testing.",
    photo: nemarlPhoto,
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Developers: React.FC = () => {
  return (
    <PageLayout
      title="Developers"
      eyebrow="THE TEAM"
      description="Meet the people behind the application."
    >
      <div className="developer-list">
        {developers.map((dev) => (
          <div className="developer-card" key={dev.name + dev.role}>
            <div className="developer-avatar">
              {dev.photo ? (
                <img src={dev.photo} alt={dev.name} />
              ) : (
                getInitials(dev.name)
              )}
            </div>
            <div className="developer-info">
              <h3>{dev.name}</h3>
              <p className="developer-role">{dev.role}</p>
              <p className="developer-desc">{dev.description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Developers;
