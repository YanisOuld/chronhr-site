import { useState } from "react";

const founders = [
  {
    initials: "AD",
    role: "Chief Executive Officer",
    name: "Aziz Diop",
    bio: "Aziz Diop is a Quantitative Software Engineer at Morgan Stanley and CEO of Chronhr. His background combines quantitative engineering experience in demanding financial environments with a strong entrepreneurial mindset. Prior to Chronhr, he also co-founded a startup in the healthcare sector. Today, he brings his technical, analytical, and product expertise to the development and growth of Chronhr.",
    photo: "/aziz-diop.jpg",
    linkedin: "https://www.linkedin.com/in/aziz-diop-060759209/",
  },
  {
    initials: "YO",
    role: "Chief Technology Officer",
    name: "Yanis Ould Mahammed",
    bio: "Yanis Ould Mahammed is a technology entrepreneur and the recipient of the CyberCap Entrepreneurship Award 2025. He focuses on building practical software solutions that help organizations structure their data, improve decision-making, and solve complex operational challenges. Alongside developing Chronhr, he studies Software Engineering at Polytechnique Montréal, combining technical execution with a strong interest in financial systems and scalable technology.",
    photo: "/yanis-ould.jpg",
    linkedin: "https://www.linkedin.com/in/yanis-ould-mahammed-6b8861329/",
  },
];

function MemberCard({ initials, role, name, bio, linkedin, photo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="founder-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`founder-media ${hovered ? "founder-media-hovered" : ""}`}
        style={
          photo
            ? {
                backgroundImage: `linear-gradient(rgba(15,17,23,0.05), rgba(15,17,23,0.16)), url(${photo})`,
                backgroundSize:
                  name === "Aziz Diop"
                    ? "99%"
                    : "cover",
                backgroundPosition:
                  name === "Yanis Ould Mahammed"
                    ? "center 35%"
                    : name === "Aziz Diop"
                      ? "74% 16%"
                      : "center 10%",
              }
            : undefined
        }
      >
        {!photo && <span className="founder-initials">{initials}</span>}
        <div className="founder-photo-line" />
      </div>

      <div className="founder-role">{role}</div>

      <div className="founder-name">{name}</div>

      <div className="founder-bio">{bio}</div>

      <div className="founder-link-wrap">
        <a
          href={linkedin}
          className="founder-link"
          style={{ color: hovered ? "#0F1117" : "#84827D" }}
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}

export default function FoundersGrid() {
  return (
    <div className="founders-grid-wrap">
      <div className="founders-label">
        Founders
      </div>

      <div className="founders-grid">
        {founders.map((f, i) => (
          <div
            key={f.initials}
            className={`founders-column ${i % 2 === 0 ? "founders-column-left" : "founders-column-right"}`}
          >
            <MemberCard {...f} />
          </div>
        ))}
      </div>
    </div>
  );
}