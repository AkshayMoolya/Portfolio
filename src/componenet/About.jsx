import React from "react";

const About = () => {
  return (
    <div
      name="about"  
      id="about"
      className="w-full  bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a full-stack web developer with a passion for learning. From
          front-end design using HTML, CSS, and JavaScript to implementing
          complex functionalities with frameworks like React and Node.js, I
          thrive on creating robust and user-friendly applications. I'm
          dedicated to staying updated with the latest technologies, actively
          engaging in online communities, and attending coding competitions to
          enhance my skills. My goal is to deliver exceptional user experiences
          by combining technical expertise with a deep understanding of user
          needs and business goals.
        </p>
        <br />
        <p className="text-xl">
          Whether working independently or in a team, I approach problem-solving
          with creativity and attention to detail. I believe in turning ideas
          into functional and elegant web applications that resonate with
          end-users. If you're seeking a versatile full-stack web developer who
          is committed to continuous improvement, let's connect and bring your
          vision to life.
        </p>
      </div>
    </div>
  );
};

export default About;
