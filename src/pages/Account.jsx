import React from "react";
import SavedFights from "../components/SavedFights";

function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="./login.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3x1 md:text-5x1 font-bold">My Fights</h1>
          </div>
        </div>
      </div>
      <SavedFights />
    </>
  );
}

export default Account;
