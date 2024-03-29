import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-black from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-green-600 ">
            Contact
          </p>
          <p className="py-6 text-gray-500">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/6f3a3033-72e5-4506-ac31-e13016c4b4a8"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-white/60 rounded-md
                text-white focus:outline-none focus:border-green-600"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md border-white/60
                text-white focus:outline-none my-4 focus:border-green-600"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md border-white/60
                text-white focus:outline-none focus:border-green-600 "
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duraction-300">
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
