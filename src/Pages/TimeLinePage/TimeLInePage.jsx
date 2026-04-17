import React, { useContext, useState } from "react";
import { FrinedContext } from "../../ContextShare/Context/Context";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidMessageDots } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { ImFilesEmpty } from "react-icons/im";

const TimeLinePage = () => {
  const { selectedFriend, selectedMessageFriend, selectedVideoFriend } =
    useContext(FrinedContext);

  const [filterType, setFilterType] = useState("all");

  //  Combine all data with type
  const allData = [
    ...selectedFriend.map((item) => ({ ...item, type: "call" })),
    ...selectedMessageFriend.map((item) => ({ ...item, type: "text" })),
    ...selectedVideoFriend.map((item) => ({ ...item, type: "video" })),
  ];

  //  Filter logic
  const filteredData = allData.filter((item) => {
    if (filterType === "all") return true;
    return item.type === filterType;
  });

  //  Empty state
  if (allData.length === 0) {
    return (
      <div className="bg-base-200 py-14 space-y-2 text-center">
        <div className="text-4xl flex justify-center">
          <ImFilesEmpty />
        </div>
        <div className="text-2xl font-semibold">Timeline is Empty!</div>
      </div>
    );
  }

  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <div className="bg-[#F8FAFC] py-10">
      <div className="w-10/12 mx-auto">
        
        {/*  Header + Filter */}
        <div className="space-y-4 mb-5">
          <h2 className="text-2xl font-bold">Timeline</h2>

          <select
            className="border px-4 py-1 rounded"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Filter timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        {/*  Timeline List */}
        {filteredData.map((friend, index) => (
          <div
            key={index}
            className="flex items-center gap-5 bg-base-100 rounded-xl p-5 my-3 shadow-sm"
          >
            {/* Icon */}
            <div className="text-xl">
              {friend.type === "call" && <FaPhoneVolume className="text-3xl" />}
              {friend.type === "text" && <BiSolidMessageDots className="text-3xl"/>}
              {friend.type === "video" && <IoVideocamOutline  className="text-3xl"/>}
            </div>

            {/* Content */}
            <div>
              <span className="text-xl font-bold capitalize">
                {friend.type}
              </span>{" "}
              with {friend.name}
              <h2 className="text-sm text-gray-500">{formattedDate}</h2>
            </div>
          </div>
        ))}

        {/*  No result after filter */}
        {filteredData.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No data found for this filter
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;