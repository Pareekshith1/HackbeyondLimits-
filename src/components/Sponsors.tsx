import React from "react";

export const Sponsors = () => {
  const sponsorCategories = [
    {
      title: "Community Partner",
      description:
        "Here are our Community Partners who foster innovation and collaboration. Their dedication bridges the gap between technology and community.",
      sponsors: [
        {
          name: "Polygon",
          logo: "./src/images/sponsor/polygon.png",
          description:
            "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.",
        },
        {
          name: "Matter Labs",
          logo: "./src/images/sponsor/matterlabs.png",
          description:
            "Matter Labs is scaling Ethereum with zero-knowledge proofs to accelerate public blockchain adoption.",
        },
      ],
    },
    {
      title: "Promotion Partner",
      description:
        "Promotion Partners ensure our message reaches far and wide. Their support helps us connect with audiences and amplify our vision.",
      sponsors: [
        {
          name: "Avalanche",
          logo: "./src/images/sponsor/avalanche.png",
          description:
            "Avalanche is one of the fastest, most reliable smart contracts platforms in the world. Its revolutionary consensus protocol and novel Subnets enable Web3 developers to easily launch highly scalable solutions.",
        },
      ],
    },
    {
      title: "Hosting Partner",
      description:
        "Our Hosting Partner provides the backbone of our event. Their infrastructure ensures a smooth and seamless experience.",
      sponsors: [
        {
          name: "AWS",
          logo: "./src/images/sponsor/aws.png",
          description:
            "AWS provides reliable, scalable, and cost-effective cloud computing services to power innovative solutions.",
        },
      ],
    },
    {
      title: "Event Partner",
      description:
        "Event Partners bring expertise and collaboration to make this event a success. Their contributions ensure a memorable experience for everyone.",
      sponsors: [
        { name: "Google", logo: "./src/images/sponsor/google.png" },
        { name: "Facebook", logo: "./src/images/sponsor/facebook.png" },
        { name: "Twitter", logo: "./src/images/sponsor/twitter.png" },
        { name: "LinkedIn", logo: "./src/images/sponsor/linkedin.png" },
        { name: "Microsoft", logo: "./src/images/sponsor/microsoft.png" },
        { name: "Apple", logo: "./src/images/sponsor/apple.png" },
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
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
                    }}
                  >
                    <div className="flex items-center justify-center w-full h-[60%] mb-6">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} Logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-4">
                      {sponsor.name}
                    </h3>
                    {sponsor.description && (
                      <p
                        className="text-gray-400 text-center text-sm md:text-base leading-relaxed px-4"
                        style={{
                          textAlign: "justify",
                          lineHeight: "1.6",
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
