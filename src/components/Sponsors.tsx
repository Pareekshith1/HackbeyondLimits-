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
        {
          name: "Coin Checkup",
          logo: "./src/images/sponsor/ccc.png",
          description:
            "Thanks to CoinCheckup, our Promotional Partner, for helping us expand our reach with real-time crypto insights!",
          link: "https://www.coincheckup.com",
        },
        {
          name: "Coin Codex",
          logo: "./src/images/sponsor/cdx.png",
          description:
            "Grateful to CoinCodex, our Promotional Partner, for supporting our mission and connecting us with the crypto community!",
          link: "https://www.coincodex.com",
        },
      ],
    },
    {
      title: "Hosting Partner",
      description:
        "Our Hosting Partner provides the backbone of our event. Their infrastructure ensures a smooth and seamless experience.",
      sponsors: [
        {
          name: "Unstop",
          logo: "./src/images/sponsor/ust.png",
          description:
            "A heartfelt thanks to Unstop, our Hosting Partner, for powering this event with reliable infrastructure and support!",
        },
      ],
    },
    {
      title: "Event Partner",
      description:
        "Event Partners bring expertise and collaboration to make this event a success. Their contributions ensure a memorable experience for everyone.",
      sponsors: [
        {
          name: "Gen.XYZ",
          logo: "./src/images/sponsor/xyzlogo.png",
          description:
            "Thank you to gen.xyz, our Silver Sponsor, for your support!",
        },
        {
          name: "Navan",
          logo: "./src/images/sponsor/navan.png",
          description:
            "Thank you to Navan AI, our Silver Sponsor, for your valuable support!",
        },
        {
          name: "Nord Vpn",
          logo: "./src/images/sponsor/nv.png",
          description:
            "A big thank you to NordVPN, our Gold Sponsor, for your exceptional support!",
        },
        {
          name: "Saily",
          logo: "./src/images/sponsor/saily.png",
          description:
            "A heartfelt thank you to Saily, our Gold Sponsor, for your generous support and partnership!",
        },
        {
          name: "Nord Pass",
          logo: "./src/images/sponsor/nord.png",
          description:
            "A special thank you to NordPass, our Gold Sponsor, for your invaluable support and collaboration!",
        },
        {
          name: "HoverRobotics",
          logo: "./src/images/sponsor/hvrr.png",
          description:
            "Thank you to HoverRobotics, our Platinum Sponsor, for your exceptional support!",
        },
        { name: "", logo: "", description: "" },
        { name: "", logo: "", description: "" },
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
              <h2 className="text-5xl font-bold text-center mb-8 text-white">
                {title}
              </h2>

              {/* Category Description */}
              <p
                className="text-center text-gray-400 mb-12 text-sm md:text-base leading-relaxed px-4"
                style={{
                  textAlign: "justify",
                  margin: "0 auto",
                  maxWidth: "600px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {description}
              </p>

              {/* Sponsor Grid */}
              <div className={`flex flex-wrap justify-center gap-8`}>
                {sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start border border-gray-700 rounded-xl bg-gradient-to-t from-gray-900 to-black shadow-lg hover:scale-105 transition-transform"
                    style={{
                      width: "300px",
                      height: "450px",
                      padding: "20px",
                      paddingBottom: "40px",
                      gap: "20px",
                      marginTop: "20px",
                    }}
                  >
                    {/* Sponsor Name and Placeholder */}
                    <h3 className="text-xl font-semibold text-center mb-4 text-white">
                      {sponsor.name}
                    </h3>
                    <div className="flex items-center justify-center w-full h-[60%] mb-6">
                      {/* Logo or Coming Soon */}
                      {sponsor.logo ? (
                        <a
                          href={sponsor.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            className="object-contain h-full"
                          />
                        </a>
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

        {/* Become a Sponsor Section */}
        <div
          className="text-center mt-16 p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg border border-gray-700"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative Elements */}
          <div
            className="absolute top-0 left-0 w-20 h-20 rounded-full bg-blue-500 opacity-50 blur-lg"
            style={{ transform: "translate(-50%, -50%)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-purple-500 opacity-50 blur-lg"
            style={{ transform: "translate(50%, 50%)" }}
          ></div>

          <h3 className="text-3xl font-bold text-white mb-6">
            Want to become our sponsor?
          </h3>

          <p
            className="text-gray-400 leading-relaxed px-4 mb-6"
            style={{
              textAlign: "justify",
              margin: "0 auto",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Join us in making this event extraordinary. As a sponsor, you'll
            gain unparalleled visibility and the opportunity to connect with a
            diverse and engaged audience. Your support will help foster
            innovation and drive success.
          </p>

          <a
            href="mailto:techhub@rathinam.in?subject=Interested%20in%20Sponsorship&body=Become%20Our%20Sponsor%20By%20Sending%20Us%20An%20Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all shadow-md"
              style={{ marginTop: "10px" }}
            >
              Join Now
            </button>
          </a>
        </div>
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
