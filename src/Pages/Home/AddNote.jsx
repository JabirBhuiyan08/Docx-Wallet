import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import cv from "../../assets/Document file logo/Curriculum Vita_.png";
import Certificate from "../../assets/Document file logo/Certificate_.png";
import BirthCertificate from "../../assets/Document file logo/Birth certificate_.png";
import NID from "../../assets/Document file logo/Nid.png";
import Passport from "../../assets/Document file logo/Passport_.png";
import SocialAddress from "../../assets/Document file logo/Social address_.png";
import WorkPermit from "../../assets/Document file logo/Work permit.png";

const AddNote = () => {
  return (
    <div>
      <h1 className="flex gap-2 justify-center items-center text-2xl font-bold">
        Add Note{" "}
        <span className="text-3xl">
          <CiCirclePlus />
        </span>{" "}
      </h1>

{/* CV, Certificate, NID, Passport, Birth Certificate, Social Address, Work Permit */}
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
          <div className="lg:w-52">
            <img src={cv} alt="" />
          </div>
          <div className="lg:w-52">
            <img src={Certificate} alt="" />
          </div>
          <div className="lg:w-52">
            <img src={BirthCertificate} alt="" />
          </div>
          <div className="lg:w-52">
            <img src={NID} alt="" />
          </div>
          <div className="lg:w-52">
            <img src={Passport} alt="" />
          </div>
          <div className="lg:w-52">
            <img src={SocialAddress} alt="" />
          </div>
          <div className="lg:w-52">
            <img src={WorkPermit} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
