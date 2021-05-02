import React from "react";

const EmergencyCard = ({ cardData, title }) => {
  return (
    <div className="bg-white shadow-lg border-t-2 overflow-hidden sm:rounded-lg mx-2 my-2 lg:mx-20 lg:my-10">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-extrabold  leading-6 font-medium text-indigo-600">
          {title}
        </h3>
        {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p> */}
      </div>
      <div className="border-t border-gray-200">
        {cardData.length > 0 ? (
          <dl>
            {cardData.map((d, i) => {
              return i % 2 === 0 ? (
                <div
                  className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  key={i}
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {d.name}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {d.numbers.map((number, index) => (
                      <a
                        href={`tel:${number}`}
                        className="ml-2 text-indigo-500"
                        key={index}
                      >
                        {number}
                      </a>
                    ))}
                  </dd>
                </div>
              ) : (
                <div
                  className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  key={i}
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {d.name}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {d.numbers.map((number, index) => (
                      <a
                        href={`tel:${number}`}
                        className="ml-2 text-indigo-500"
                        key={index}
                      >
                        {number}
                      </a>
                    ))}
                  </dd>
                </div>
              );
            })}
          </dl>
        ) : (
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Data will be added soon....
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyCard;
