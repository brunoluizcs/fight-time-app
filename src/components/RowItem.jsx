import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function RowItem({ item }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const id = doc(db, "users", `${user?.email}`);
  const saveFight = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(id, {
        savedFights: arrayUnion({
          id: item.id,
          name: item.name,
          description: item.description,
          img: item.img,
        }),
      });
    } else {
      alert("Please log in to save a fight");
    }
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointe relative p-2">
        <img className="w-full h-auto block" src={item.img} alt={item.name} />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.name}
          </p>
          <p onClick={saveFight}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default RowItem;
