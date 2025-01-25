import React from "react";

export const Sponsors = () => {
  const sponsorCategories = [
    {
      title: "Community Partner",
      description:
        "Here are our Community Partners who foster innovation and collaboration. Their dedication bridges the gap between technology and community.",
      sponsors: [
        { name: "Coming Soon", logo: "", description: "" },
        { name: "Coming Soon", logo: "", description: "" },
      ],
    },
    {
      title: "Promotion Partner",
      description:
        "Promotion Partners ensure our message reaches far and wide. Their support helps us connect with audiences and amplify our vision.",
      sponsors: [
        { name: "Coming Soon", logo: "", description: "" },
      ],
    },
    {
      title: "Hosting Partner",
      description:
        "Our Hosting Partner provides the backbone of our event. Their infrastructure ensures a smooth and seamless experience.",
      sponsors: [
        { name: "Unstop", logo: "./src/images/sponsor/ust.png", description: "A heartfelt thanks to Unstop, our Hosting Partner, for powering this event with reliable infrastructure and support!" },
      ],
    },
    {
      title: "Event Partner",
      description:
        "Event Partners bring expertise and collaboration to make this event a success. Their contributions ensure a memorable experience for everyone.",
      sponsors: [
        { name: "Gen.XYZ", logo: "./src/images/sponsor/xyzlogo.png", description: "Thank you to gen.xyz, our Silver Sponsor, for your support!" },
        { name: "Navan", logo: "./src/images/sponsor/navan.png", description: "Thank you to Navan AI, our Silver Sponsor, for your valuable support!" },
        { name: "Nord Vpn", logo: "./src/images/sponsor/nv.png", description: "A big thank you to NordVPN, our Gold Sponsor, for your exceptional support!" },
        { name: "Saily", logo: "./src/images/sponsor/saily.png", description: "A heartfelt thank you to Saily, our Gold Sponsor, for your generous support and partnership!" },
        { name: "Nord Pass", logo: "./src/images/sponsor/nord.png", description: "A special thank you to NordPass, our Gold Sponsor, for your invaluable support and collaboration!" },
        { name: "HoverRobotics", logo: "./src/images/sponsor/hvrr.png", description: "Thank you to HoverRobotics, our Platinum Sponsor, for your exceptional support!" },
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-black text-white" id="sponsors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {sponsorCategories.map(
          ({ title, description, sponsors }, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Sponsor Category Heading */}
              <h2 className="text-4xl font-bold text-center mb-8 text-white">
                {title}
              </h2>

              {/* Category Description */}
              <p
                className="text-center text-gray-400 mb-12 text-sm md:text-base leading-relaxed px-4"
                style={{
                  textAlign: "justify",
                  margin: "0 auto",
                  maxWidth: "600px",
                  lineHeight: "1.8",
                  marginBottom: "20px", // 20px space added
                }}
              >
                {description}
              </p>

              {/* Sponsor Grid */}
              <div className={`flex flex-wrap justify-center gap-8`}>
                {sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start border border-gray-700 rounded-xl bg-gradient-to-t from-gray-900 to-black shadow-lg"
                    style={{
                      width: "300px", // Fixed width
                      height: "450px", // Fixed height
                      padding: "20px",
                      paddingBottom: "40px", // Adjusted for additional spacing at the bottom
                      gap: "20px", // Added space between elements in the container
                      marginTop: "20px", // Added 20px spacing from the top
                    }}
                  >
                    {/* Sponsor Name and Placeholder */}
                    <h3 className="text-lg font-semibold text-center mb-4 text-white">
                      {sponsor.name}
                    </h3>
                    <div className="flex items-center justify-center w-full h-[60%] mb-6">
                      {/* Logo or Coming Soon */}
                      {sponsor.logo ? (
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className="object-contain h-full"
                        />
                      ) : (
                        <p className="text-center text-gray-400 text-sm md:text-base leading-relaxed px-4">
                          Coming Soon
                        </p>
                      )}
                    </div>
                    {/* Sponsor Description */}
                    {sponsor.description && (
                      <p
                        className="text-gray-400 text-center text-sm md:text-base leading-relaxed px-4"
                        style={{
                          textAlign: "justify",
                          lineHeight: "1.6",
                          marginTop: "20px", // 20px spacing before description
                        }}
                      >
                        {sponsor.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .container {
          max-width: 1400px; /* Adjusted for responsiveness */
        }
        h2,
        h3 {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </section>
  );
};
