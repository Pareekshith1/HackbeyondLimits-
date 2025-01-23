import React from "react";

const LocationDetails = () => (
  <div className="text-center mb-8">
    {/* Single Centered Image for College Logo */}
    <div className="flex justify-center mb-1">
      <img
        src="./src/images/ratlogo.png"
        alt="College Logo"
        className="w-96 h-auto" // Further increased the size of the ratlogo
      />
    </div>

    {/*<div className="flex justify-center mb-3 -mt-6">
      <img
        src="./src/images/rsmart.png"
        alt="RSamrt Logo"
        className="w-32 h-auto" // Kept the rsmart logo smaller
      />
    </div>*/}
    {/* College Heading */}
    <h2 className="text-4xl font-bold text-white mb-2">
      Rathinam College of Arts and Science
    </h2>
    {/* Description */}
    <p className="text-gray-400">
      An Autonomous Institution Affiliated to Bharathiar University
      <br />
      Accredited by NAAC, Approved by AICTE & ISO 9001:2008 Certified
      <br />
      Rathinam Techzone, Pollachi Main Road, Eachanari, Coimbatore-21
    </p>
  </div>
);

export const Location = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <LocationDetails />
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            style={{ zIndex: 10 }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rathinam%20College%20of%20arts%20and%20science%20,Echanari,%20Coimbatore,Tamilnadu+(Rathinam%20College%20Of%20Arts%20And%20Science)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </section>
  );
};
