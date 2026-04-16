import React, { useContext } from "react";
import { NavLink, useParams } from "react-router";
import useHooks from "../../../Hooks/UseHooks";
import { GridLoader } from "react-spinners";
import { FrinedContext } from "../../../ContextShare/Context/Context";
import { MdNotificationsPaused } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidMessageDots } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const FriendDetailesPage = () => {
  const { id } = useParams();
  // console.log(id);
  const { friendData, loading } = useHooks();
  const axceptedFriend = friendData.find((item) => item.id === Number(id));

  const { selectedFriend, setSelectedFriend } = useContext(FrinedContext);
  const { selectedMessageFriend, setSelectedMessageFriend } =
    useContext(FrinedContext);
  const { selectedVideoFriend, setSelectedVideoFriend } =
    useContext(FrinedContext);

  const handleCallFriend = () => {
    setSelectedFriend([...selectedFriend, axceptedFriend]);
    console.log(axceptedFriend);
    toast.success(`Call with ${axceptedFriend.name}`);
  };
  const handleMessegeFriend = () => {
    setSelectedMessageFriend([...selectedMessageFriend, axceptedFriend]);
    toast.success(`Text with ${axceptedFriend.name}`);
  };
  const handleVideoFriend = () => {
    setSelectedVideoFriend([...selectedVideoFriend, axceptedFriend]);
    toast.success(`Video with ${axceptedFriend.name}`);
  };
  console.log(selectedFriend, "selected Friend");

  if (loading) {
    return (
      <div className="flex justify-center items-center py-18">
        <GridLoader color="#54CF68"></GridLoader>
      </div>
    );
  }

  return (
    <div className="bg-[#E9E9E9]">
      <div className="w-full md:w-8/12 mx-auto py-10 ">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="flex-1 ">
            <div className="card bg-base-100 ">
              <figure className="px-10 pt-10">
                <img
                  src={axceptedFriend.picture}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center space-y-3a">
                <h2 className="card-title">{axceptedFriend.name}</h2>
                <div>
                  {axceptedFriend?.tags.map((tag, idex) => (
                    <span
                      key={idex}
                      className="text-[12px] font-bold px-3 py-1 rounded-full bg-green-300 mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className={`text-[12px] py-2 px-4 rounded-full text-white ${axceptedFriend.status == "Almost Due" ? "bg-[#EFAD44]" : axceptedFriend.status == "Overdue" ? "bg-[#EF4444]" : axceptedFriend.status == "On Track" ? "bg-[#244D3F]" : ""}`}
                >
                  {axceptedFriend.status}
                </div>
                <div>
                  <p>"{axceptedFriend.bio}"</p>
                  <p>{axceptedFriend.email}</p>
                </div>
              </div>
            </div>
            <button className="btn w-full mt-2">
              <MdNotificationsPaused /> Snooze 2 weeks
            </button>
            <button className="btn w-full mt-2">
              <LuArchive /> Archive
            </button>
            <button className="text-red-500 btn w-full mt-2">
              <RiDeleteBinLine /> Delete
            </button>
          </div>
          <div className="flex-3">
            <div className="flex justify-between gap-3 text-center w-full">
              <div className="shadow-sm bg-white p-4 rounded-sm w-full">
                <span className="text-[10px]md:text-xl font-bold">
                  {axceptedFriend.days_since_contact}
                </span>
                <p className="text-[8px] md:text-[16px] text-gray-400">Days Since Contact</p>
              </div>
              <div className="shadow-sm bg-white p-4 rounded-sm w-full">
                <span className="text-[10px] md:text-xl font-bold">
                  {axceptedFriend.goal}
                </span>
                <p className="text-[8px] md:text-xl text-gray-400">Goal (Days)</p>
              </div>
              <div className="shadow-sm bg-white p-4 rounded-sm w-full">
                <span className="text-[8px]  md:text-[14px] font-bold">
                  {axceptedFriend.next_due_date}
                </span>
                <p className="text-[8px] md:text-[14px] text-gray-400">Next Due</p> 
              </div>
            </div>
            <div>
              <div className="shadow-sm bg-white p-4 rounded-sm w-full mt-4">
                <span className="text-[10px] md:text-2xl font-bold flex justify-between mb-1">
                  <h2 className="text-[10px] md:text-2xl font-bold">Relationship Goal</h2>
                  <button className="btn">Exit</button>
                </span>
                <p>
                  {" "}
                  <span className="text-gray-400">Connect every </span>
                  <span className="text-[10px] md:text-2xl font-bold">
                    {" "}
                    {axceptedFriend.goal} days
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="shadow-sm bg-white  p-4 rounded-sm w-full mt-4">
                <h1 className="text-[10px] md:text-2xl font-semibold py-3">Quick Check-In</h1>
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleCallFriend()}
                    // to={`/timeline`}
                    className="shadow-sm bg-gray-100 w-full p-4 rounded-sm text-center "
                  >
                    <span className="text-[10px] md:text-2xl font-bold ">
                      <FaPhoneVolume className="mx-auto mb-1" />
                    </span>
                    <p className="text-[8px] md:text-xl text-gray-400">Call</p>
                  </button>
                  <button
                    onClick={() => handleMessegeFriend()}
                    // to={`/timeline`}
                    className="shadow-sm w-full bg-gray-100 p-4 rounded-sm text-center"
                  >
                    <span className="text-[10px] md:text-2xl font-bold">
                      <BiSolidMessageDots className="mx-auto mb-1" />
                    </span>
                    <p className="text-[8px] md:text-xl text-gray-400">Text</p>
                  </button>
                  <button
                    onClick={() => handleVideoFriend()}
                    // to={`/timeline`}
                    className="shadow-sm w-full bg-gray-100 p-4 rounded-sm text-center"
                  >
                    <span className="text-[10px] md:text-2xl font-bold">
                      <IoVideocamOutline className="mx-auto mb-1" />
                    </span>
                    <p className="text-[8px] md:text-xl text-gray-400">Video</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailesPage;
