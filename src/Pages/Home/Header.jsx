import React from "react";
import logo from "../../assets/logo-2.png";

const Header = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto p-4 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-4">
          {/* Img */}
          <img src={logo} alt="" className="lg:w-56 w-48" />
          {/* text Part */}
          <div className="-mt-10 mb-10">
            <h1 className="text-5xl font-bold">
              <span className="text-blue-700 font-bold">Docx</span> Wallet
            </h1>
            <p>
              Username - <span>Docxwallet</span>
            </p>
            <p>Company- Docx Wallets pte ltd</p>
            <p>Work permit Number- 123456</p>

            <h1 className="text-xl font-bold text-blue-800">Edit Account</h1>
          </div>
        </div>
        <div className="flex flex-col font-bold items-center gap-4">
          <button className="bg-blue-800 text-white px-4 py-2 rounded-4xl">
            My QR Code
          </button>
          <button className="text-blue-700">Order Own Card</button>
        </div>
      </div>
    </>
  );
};

export default Header;
