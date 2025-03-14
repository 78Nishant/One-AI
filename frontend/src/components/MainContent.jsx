import React, { useContext, useState } from "react";
import { FaUserCircle, FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";
import SpeechToText from "./TTS";

const MainContent = () => {

  const { input, setInput, recentPrompt, setRecentPrompt, showResult, loading, resultData, onSent, chooseAI } = useContext(Context);
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = () => {
    if (input.trim()) {
      setSearchActive(true);
      onSent();
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#1D1E20] text-white items-center relative">
      {/* Top Bar */}
      <div className="w-full  px-5 mt-5 flex justify-between items-center text-xl p-3 text-slate-700">
        <p className="text-white font-bold  w-24 text-center rounded-md">History</p>
        <div className="flex gap-4 text-white">
          <p>Username</p>
          <FaUserCircle className="text-2xl" />
        </div>
      </div>

      {/* Search Bar */}
      <div className={`transition-all duration-300 w-full max-w-[900px] px-5 ${searchActive ? 'mt-5' : 'mt-[30vh]'} flex flex-col items-center`}>
        {!searchActive && <p className="text-white text-7xl font-bold mb-5">One-AI</p>}

        <div className="flex items-center w-full bg-gray-200 py-2 px-5 rounded-full mt-5">
          {/* <input
            type="text"
            placeholder="Search here..."
            className="flex-1 bg-transparent border-none outline-none p-2 text-lg text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <FaMicrophone className="text-2xl text-black cursor-pointer" />
          {input && <IoMdSend onClick={handleSearch} className="text-2xl text-black cursor-pointer ml-5" />}
         */}
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 bg-transparent border-none outline-none p-2 text-lg text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SpeechToText input={input} setInput={setInput} />
          {input && <IoMdSend onClick={handleSearch} className="text-2xl text-black cursor-pointer ml-5" />}
        </div>

      </div>

      {/* Search Results */}
      {searchActive && (
        <div className="w-full  px-5 mt-5">
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar">
            {/* <div className="my-10 flex items-center gap-5">
              <FaUserCircle className="text-3xl" />
              <p className="text-lg font-[400] leading-[1.8]">{recentPrompt}</p>
            </div> */}
            <div className="flex items-start gap-5 mt-10">
              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  <p>Loading results from {chooseAI} </p>
                  <hr className="rounded-md bg-gray-300 p-4 animate-pulse" />
                  <hr className="rounded-md bg-gray-300 p-4 animate-pulse" />
                  <hr className="rounded-md bg-gray-300 p-4 animate-pulse" />
                </div>
              ) : (
                <p className="text-lg font-[400] leading-[1.8]" dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;