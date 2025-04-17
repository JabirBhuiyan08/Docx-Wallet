import React from 'react';
import cv from "../../assets/Document file logo/Curriculum Vita_.png";
import Certificate from "../../assets/Document file logo/Certificate_.png";
import BirthCertificate from "../../assets/Document file logo/Birth certificate_.png";
import NID from "../../assets/Document file logo/Nid.png";
import Passport from "../../assets/Document file logo/Passport_.png";
import SocialAddress from "../../assets/Document file logo/Social address_.png";
import WorkPermit from "../../assets/Document file logo/Work permit.png";


const Papers = () => {
    return (
        <div>
             <div className="flex flex-col justify-center items-center mt-10">
                    <div className="grid grid-cols-3 gap-10 mt-10 ">
                      <div className="w-52">
                        <img src={cv} alt="" />
                      </div>
                      <div className="w-52">
                        <img src={Certificate} alt="" />
                      </div>
                      <div className="w-52">
                        <img src={BirthCertificate} alt="" />
                      </div>
                      <div className="w-52">
                        <img src={NID} alt="" />
                      </div>
                      <div className="w-52">
                        <img src={Passport} alt="" />
                      </div>
                      <div className="w-52">
                        <img src={SocialAddress} alt="" />
                      </div>
                      <div className="w-52">
                        <img src={WorkPermit} alt="" />
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default Papers;