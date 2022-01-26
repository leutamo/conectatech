import React from "react";
import ProfessionalHeader from "../../header/professional/ProfessionalHeader.component";
import Offer from "../../../components/Offer.component";
import SideBar from "../../../components/SideBar.component";

const ProfessionalHomePage = () => {
  return (
    <div className="bg-primary">
      <ProfessionalHeader />
      <div className="main grid grid-cols-3 gap-4 mx-4">
        <div className="mx-16">
          <SideBar />
        </div>
        <div className="space-y-4 col-span-2 mx-16">
          <h3 className="text-xl font-bold uppercase text-center">
            Proyectos Abiertos:
          </h3>
          {[1, 2, 3, 4, 5].map((item) => (
            <Offer key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHomePage;
