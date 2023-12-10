import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Get{' '}
              <span className="text-blue-900 font-bold text-4xl">IT jobs</span>{' '}
              in your city
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore existing career opportunities at{' '}
              <span className="text-blue-600 font-bold text-xl">
                PHN Technology
              </span>
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://th.bing.com/th/id/OIP.O_J1Jpt9nl3oS2z3bHhxLAHaGZ?w=881&h=761&rs=1&pid=ImgDetMain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
