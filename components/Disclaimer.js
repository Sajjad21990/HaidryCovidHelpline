import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-gray-100 mx-5 rounded text-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Disclaimer</span>
          <span className="block text-indigo-600">
            This Is A Non-Profit Website Made To Help People.
          </span>
          <span className="text-base">
            We can't gurantee if you will definately get a bed or not but we
            have put up all the information and contact details as we received
            from various source. This website collects data from{" "}
            <a href="https://www.covidbedmbmc.in/HospitalInfo/show">
              https://www.covidbedmbmc.in/HospitalInfo/show
            </a>
            . We came up with this idea after witnessing multiple deaths due to
            the shortages of beds and Remdesivir Injections. There are multiple
            NGO's and organizations who have the injections and also a list of
            hospitals with available beds. If you want your organization to be
            listed up here on this website (We usually upload the resources
            which we get) you can contact us on our helpline number:
            <a href="tel:9167014017">9167014017</a> and
            <a href="tel:8452814017">8452814017</a>
          </span>
        </h2>
        {/* <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              View Contacts
            </a>
          </div>
         
        </div> */}
      </div>
    </div>
  );
};

export default Disclaimer;
