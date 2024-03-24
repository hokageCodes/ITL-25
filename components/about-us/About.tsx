import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xs lg:text-sm font-semibold uppercase text-purple-700">About Conference</h3>
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 my-2">Welcome to the Project Management</h2>
            <p className="text-purple-700 text-sm lg:text-base">
              The Project Management is a platform to learn expert techniques
              for building successful project teams, creating efficient plans and
              implementing effective tracking measures to ensure your projects
              come in on deadline and on budget. In one fast-paced, well-designed day,
              we will cover all the essential elements of project management.
            </p>
            <div className="mt-4 lg:mt-6">
              <button className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm lg:text-base transition duration-300 ease-in-out hover:bg-purple-700">
                Interested
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              width={500}
              height={500}
              src="/audience.jpg"
              alt="About the Conference"
              className="rounded-lg shadow-lg w-full h-auto max-w-lg"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
