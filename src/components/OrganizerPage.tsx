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
    title: "HBL | Event Manager | ",
    photo: "./src/images/org/arun.jpeg",
  },
  {
    name: "Aasil Ahammed S",
    title: "Event Coordinator",
    photo: "./src/images/org/aasil.jpeg",
  },
  {
    name: "Ansar Hussain",
    title: "Management Lead",
    photo: "/path-to-photos/akersh.jpg",
  },
  {
    name: "Praveen R",
    title: "Management Control",
    photo: "./src/images/org/praveen.jpeg",
  },
  {
    name: "Mohammed Irfan",
    title: "Management Control",
    photo: "./src/images/org/irfan.jpeg",
  },
  {
    name: "Mohanraj R",
    title: "Management Control",
    photo: "./src/images/org/mohan.jpeg",
  },
  {
    name: "Pareekshith P",
    title: "Technical Lead",
    photo: "./src/images/org/pareekshith.jpeg",
  },
  {
    name: "Pozhilan A",
    title: "Technical Director",
    photo: "./src/images/org/pozhilan.jpg",
  },
  {
    name: "Mohammed Nazeem M",
    title: "Technical Director",
    photo: "./src/images/org/naseem.jpeg",
  },
  {
    name: "Mayur Karthik",
    title: "Technical Director",
    photo: "./src/images/org/mayur.jpeg",
  },
  {
    name: "Nashva A",
    title: "Support Team Lead",
    photo: "./src/images/org/nashva.jpg",
  },
  {
    name: "Varsha K",
    title: "Support team",
    photo: "./src/images/org/varsha.jpeg",
  },
  {
    name: "Safna M",
    title: "Support team",
    photo: "./src/images/org/safna.jpeg",
  },
  {
    name: "Rithish B",
    title: "Design Director",
    photo: "./src/images/org/rithis.jpg",
  },
  {
    name: "Joshwa Sanjay",
    title: "Event Designer",
    photo: "./src/images/favicon.png",
  },
];

const OrganizerPage: React.FC = () => {
  const [hoveredOrganizer, setHoveredOrganizer] = useState<Organizer | null>(
    null
  );

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Mentors & Organizers</h1>
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
