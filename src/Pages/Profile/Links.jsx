import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const Links = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-baseline mt-10 mb-10">
      <h1 className="flex justify-center items-center text-2xl font-bold">
        Add Links
        <span>
          <CiCirclePlus />
        </span>
      </h1>
      <div className="flex flex-col gap-4 justify-start
      font-bold mt-10">
        <h1>Facebook: </h1>
        <h1>Instagram: </h1>
        <h1>Whats App: </h1>
        <h1>Email: </h1>
      </div>
    </div>
  );
};

export default Links;
