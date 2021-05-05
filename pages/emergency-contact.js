import React, { useState } from "react";
import EmergencyCard from "../components/EmergencyCard";

import NavbarEmergency from "../components/NavbarEmergency";
import {
  oxygenSuppliersData,
  plasmaDonorData,
  ambulanceData,
  bloodDonors,
  RTPCRdata,
  RemFDAInspectorsData,
  hearseVanNumbers,
  kabrastanNumbers,
  otherHelpfulNumbers,
} from "../data";

const EmergencyContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-50">
        <NavbarEmergency
          isOpen={isOpen}
          hanldeOpen={() => setIsOpen(true)}
          handleClose={() => setIsOpen(false)}
        />
        <div className="max-w-7xl mx-auto py-12 px-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            <span className="block">Emergency Contact and</span>
            <span className="block text-indigo-600">Helpline Numbers.</span>
          </h2>
        </div>
      </div>
      <EmergencyCard
        cardData={oxygenSuppliersData}
        title="Oxygen Cylinder Suppliers"
      />
      <EmergencyCard cardData={plasmaDonorData} title="Donate Your Plasma" />
      <EmergencyCard cardData={ambulanceData} title="Ambulance numbers" />;
      <EmergencyCard
        cardData={bloodDonors}
        title="Need of blood (Non-Plasma)"
      />
      <EmergencyCard cardData={RTPCRdata} title="RT-PCR centers and CT scans" />
      {/* <EmergencyCard
        cardData={RemFDAInspectorsData}
        title="Remdesivir FDA inspector number"
      /> */}
      <EmergencyCard cardData={hearseVanNumbers} title="Hearse Van Numbers" />
      {/* <EmergencyCard
        cardData={kabrastanNumbers}
        title="Kabrastan MGMT numbers"
      /> */}
      <EmergencyCard
        cardData={otherHelpfulNumbers}
        title="Other helpline numbers"
      />
    </div>
  );
};

export default EmergencyContact;
