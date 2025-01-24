import React, { useState } from "react";

type Organizer = {
  name: string;
  title: string;
  photo: string;
};

const organizers: Organizer[] = [
  {
    name: "Lakshan-G",
    title: "HBL | Lead Organizer | Head of TechHub",
    photo: "./src/images/org/lakshan.jpeg",
  },
  {
    name: "Arun Kumar K",
    title: "HBL | Event Manager | TechHub Event Organizer ",
    photo: "./src/images/org/arun.jpeg",
  },
  {
    name: "Aasil Ahammed S",
    title: "HBL | Event Coordinator| TechHub Event Coordinator ",
    photo: "./src/images/org/aasil.jpeg",
  },
  {
    name: "Ansar Hussain",
    title: "HBL | Management Lead | Head of TechHub",
    photo: "./src/images/org/ansar.jpeg",
  },
  {
    name: "Praveen R",
    title: "HBL | Management Control | TechHub Event management",
    photo: "./src/images/org/praveen.jpeg",
  },
  {
    name: "Mohammed Irfan",
    title: "HBL | Management Control | TechHub Event Management",
    photo: "./src/images/org/irfan.jpeg",
  },
  {
    name: "Mohanraj R",
    title: "HBL | Management Control | TechHub Event Associate",
    photo: "./src/images/org/mohan.jpeg",
  },
  {
    name: "Pareekshith P",
    title: "HBL | Technical Lead | TechHub Technical Lead",
    photo: "./src/images/org/pareekshith.jpeg",
  },
  {
    name: "Pozhilan A",
    title: "HBL | Technical Director | TechHub Technical Assistant",
    photo: "./src/images/org/pozhilan.jpeg",
  },
  {
    name: "Mohammed Nazeem M",
    title: "HBL | Technical Director | TechHub Technical Organizer",
    photo: "./src/images/org/naseem.jpeg",
  },
  {
    name: "Mayur Karthik",
    title: "HBl | Technical Director | TechHub technical Organizer",
    photo: "./src/images/org/mayur.jpeg",
  },
  {
    name: "Nashva A",
    title: "HBL | Support Team Lead | TechHub media Lead",
    photo: "./src/images/org/naswa.jpEg",
  },
  {
    name: "Varsha K",
    title: "HBL | Support team | TechHub Media Manager",
    photo: "./src/images/org/varsha.jpeg",
  },
  {
    name: "Safna M",
    title: "HBL| Support team | TechHub Media Manager",
    photo: "./src/images/org/safna.jpeg",
  },
  {
    name: "Rithish B",
    title: "HBL | Design Director | TechHub Visual Designer",
    photo: "./src/images/org/rithesh.jpeg",
  },
  {
    name: "Joshwa Sanjay",
    title: "HBL | Event Designer | Techhub Visual Designer",
    photo: "./src/images/favicon.png",
  },
];

const OrganizerPage: React.FC = () => {
  const [hoveredOrganizer, setHoveredOrganizer] = useState<Organizer | null>(null);

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Powerhouse Team</h1>

        {/* Motivational Paragraph about Organizers */}
        <p style={styles.motivationalParagraph}>
          Meet the event organizers who are the backbone of this hackathon, tirelessly working behind the scenes to create a platform that fosters innovation, collaboration, and growth. Their commitment and hard work make this event possible.
        </p>

        <div style={styles.gridWrapper}>
          <div style={styles.gridColumn}>
            {organizers
              .slice(0, Math.ceil(organizers.length / 2))
              .map((organizer, index) => (
                <div
                  style={{
                    ...styles.card,
                    opacity:
                      hoveredOrganizer &&
                      hoveredOrganizer.name !== organizer.name
                        ? 0.3
                        : 1,
                  }}
                  key={index}
                  onMouseEnter={() => setHoveredOrganizer(organizer)}
                  onMouseLeave={() => setHoveredOrganizer(null)}
                >
                  <h2 style={styles.name}>{organizer.name}</h2>
                  <p style={styles.title}>{organizer.title}</p>
                  {hoveredOrganizer?.name === organizer.name && (
                    <img
                      src={hoveredOrganizer.photo}
                      alt="Organizer"
                      style={styles.hoverImageLeft}
                    />
                  )}
                </div>
              ))}
          </div>
          <div style={styles.divider}></div>
          <div style={styles.gridColumn}>
            {organizers
              .slice(Math.ceil(organizers.length / 2))
              .map((organizer, index) => (
                <div
                  style={{
                    ...styles.card,
                    opacity:
                      hoveredOrganizer &&
                      hoveredOrganizer.name !== organizer.name
                        ? 0.3
                        : 1,
                  }}
                  key={index}
                  onMouseEnter={() => setHoveredOrganizer(organizer)}
                  onMouseLeave={() => setHoveredOrganizer(null)}
                >
                  <h2 style={styles.name}>{organizer.name}</h2>
                  <p style={styles.title}>{organizer.title}</p>
                  {hoveredOrganizer?.name === organizer.name && (
                    <img
                      src={hoveredOrganizer.photo}
                      alt="Organizer"
                      style={styles.hoverImageRight}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* Increased blank space */}
        <div style={{ height: "150px" }}></div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "170vh",
    backgroundColor: "transparent",
    color: "#fff",
    fontFamily: "Georgia, serif",
    position: "relative" as const,
  },
  container: {
    textAlign: "center" as const,
    padding: "2rem",
    maxWidth: "800px",
    width: "100%",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    fontWeight: "bold" as const,
    color: "#fff",
  },
  motivationalParagraph: {
    fontSize: "1.1rem",
    color: "#A020F0",
    marginBottom: "2rem",
    textAlign: "justify" as const,
    lineHeight: "1.6",
    padding: "0 1rem",
  },
  gridWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: "1.5rem",
  },
  gridColumn: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    flex: 1,
  },
  divider: {
    width: "6px",
    backgroundColor: "#A020F0",
    flexShrink: 0,
  },
  card: {
    padding: "1.5rem",
    position: "relative" as const,
    border: "none",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    cursor: "pointer",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bold" as const,
    marginBottom: "0.5rem",
    color: "#fff",
  },
  title: {
    fontSize: "1rem",
    color: "#A020F0",
  },
  hoverImageLeft: {
    position: "absolute" as const,
    top: "0",
    left: "-120%",
    marginLeft: "100px",
    width: "250px",
    height: "250px",
    borderRadius: "8px",
    objectFit: "cover" as const,
    border: "2px solid #fff",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
    opacity: 1,
    transform: "scale(1)",
  },
  hoverImageRight: {
    position: "absolute" as const,
    top: "0",
    right: "-120%",
    marginRight: "100px",
    width: "250px",
    height: "250px",
    borderRadius: "8px",
    objectFit: "cover" as const,
    border: "2px solid #fff",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
    opacity: 1,
    transform: "scale(1)",
  },
};

export default OrganizerPage;
