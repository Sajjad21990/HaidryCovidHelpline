import React from "react";
import { Link, Link as SmoothLink } from "react-scroll";

const Hero = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Mira-Bhayander</span>
          <br />
          <span className="block text-indigo-600 xl:inline">
            Covid-19 Helpline
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Volunteer driven, crowdsourced tracker for Covid19 cases in
          Mira-Bhayander area.
          <br />
          Be a part of the #FightAgainstCorona <br />
          Call us at{" "}
          <a href="tel:9167014017" className="text-indigo-500">
            {" "}
            9167014017{" "}
          </a>{" "}
          or{" "}
          <a href="tel:91670140178452814017" className="text-indigo-500">
            8452814017
          </a>
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <SmoothLink
              to="beds-table"
              smooth
              duration={1000}
              className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Check Beds Availability
            </SmoothLink>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Track Cases
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
