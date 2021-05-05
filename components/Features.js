import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <hr />
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide ">
            #AboutUs
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Haidery Covid Helpline
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This website provides you the information about Hospital beds,
            Oxygen Cylinders to the needy ones at right time.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <Link href="/emergency-contact">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img src="/images/hospital.svg" alt="hospitals" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    HOSPITALS AND DOCTORS
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  You will find some notable doctors and hospitals who have
                  availability of beds among different states.
                </dd>
              </div>
            </Link>
            <Link href="/emergency-contact">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img src="/images/vaccine.svg" alt="vaccine" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Vaccine Information
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Find all vaccine related information here.
                </dd>
              </div>
            </Link>
            <Link href="/emergency-contact">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img src="/images/lungs.svg" alt="oxygen" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    OXYGEN SUPPLIERS
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Find different organisations providing oxygen cylinders.
                </dd>
              </div>
            </Link>
            <Link href="/emergency-contact">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img src="/images/emergency.svg" alt="emergency" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Emergency Helpline
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  In case of medical consultation or information contact the
                  given Helpline No. for Oxygen Cylinders, Remdisivers
                  <a href="tel:9167014017" className="text-indigo-500 mx-1">
                    9167014017
                  </a>
                  and
                  <a href="tel: 8452814017" className="text-indigo-500 mx-1">
                    8452814017
                  </a>
                </dd>
              </div>
            </Link>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
