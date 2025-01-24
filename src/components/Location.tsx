import React from "react";

const LocationDetails = () => (
  <div className="text-center mb-8">
    {/* Single Centered Image for College Logo */}
    <div className="flex justify-center mb-4">
      <img
        src="./src/images/ratlogo.png"
        alt="College Logo"
        className="w-96 h-auto" // Further increased the size of the ratlogo
      />
    </div>

    {/* College Heading */}
    <h2 className="text-4xl font-bold text-white mb-4">
      Rathinam College of Arts and Science
    </h2>

    {/* Intro Section */}
    <p className="text-gray-400 mb-6 px-6 md:px-16 text-justify">
      Rathinam College of Arts and Science is a co-educational institution situated within the Rathinam Techzone Campus at Pollachi Main Road, Eachanari, Coimbatore, India. It is affiliated to Bharathiar University and recognized by the University Grants Commission (UGC). The college was established in 2001 by Rathinam Arumugam Research and Education Foundation.
      <br />
      <br />
      An Autonomous Institution, the college is accredited by NAAC with A++ Grade, approved by AICTE, and ISO 9001:2008 certified. Rathinam College offers a wide range of undergraduate and postgraduate courses with state-of-the-art infrastructure and highly qualified faculty members.
    </p>

    {/* Image Gallery */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 mb-8">
      <div className="flex justify-center">
        <img
          src="./src/images/mokkacollegephotos/mokkacollege1.jpg"
          alt="College Campus 1"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="./src/images/mokkacollegephotos/mokkacollege2.jpg"
          alt="College Campus 2"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="./src/images/mokkacollegephotos/mokkacollege3.jpg"
          alt="College Campus 3"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
);

export const Location = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <LocationDetails />
        <div style={{ width: "100%" }} className="mt-8">
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
