import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlus, FaQuestion } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { newChat, setChooseAI, chooseAI,onSent } = useContext(Context); 

  const aiModels = [
    { name: "Meta-Llama", key: "meta-llama",img_src:"https://asset.kompas.com/crops/lFgJr6bjgPhh0Xs0dli1Z7ybLwg=/109x0:909x533/1200x800/data/photo/2024/07/25/66a1c8562d0ef.png" },
    { name: "Gemini", key: "gemini" ,img_src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HHof-iCZDrNOvABgMhjBGUuySGtYUhrdKw&s"},
    { name: "DeepSeek", key: "deepseek",img_src:"https://miro.medium.com/v2/resize:fit:1400/1*O6RL_ZCq88aMkgPb-FhA1g.png" },
    { name: "Perplexity", key: "perplexy",img_src:"https://assets.bizclikmedia.net/1800/b9c92286e658119663b97a2267aee9d1:0006bf344b145b7046bf9b5f43b7a786/perplexity-logo.webp" },
    { name: "Qwen", key: "qwen",img_src:"https://miro.medium.com/v2/resize:fit:1400/0*mzqlZrYuFnX0HNRZ.png" },
    { name: "Mistral", key: "mistral",img_src:"https://images.indianexpress.com/2025/02/Mistral-.jpg" },
    { name: "IBM", key: "ibm",img_src:"https://developer-blogs.nvidia.com/wp-content/uploads/2024/10/IBM-Granite-Models-NVIDIA-1.png" },
    { name: "IBM_Granite", key: "ibm_granite",img_src:"https://developer-blogs.nvidia.com/wp-content/uploads/2024/10/IBM-Granite-Models-NVIDIA-1.png" },
    { name: "Gemma", key: "gemma",img_src:"https://res.infoq.com/news/2024/02/google-gemma-open-model/en/headerimage/generatedHeaderImage-1708977571481.jpg" },
  ];

  const response=async(key)=>{
    setChooseAI(key)
    await onSent();
  }

  return (
    // <div className="min-h-screen inline-flex flex-col justify-between bg-[#e4e7eb] py-[25px] px-[15px]">
    //   <div>
    //     <IoMenu
    //       onClick={() => setExtended(!extended)}
    //       className="text-2xl block cursor-pointer"
    //     />

    //     <div
    //       onClick={() => newChat()}
    //       className="mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[14px] text-gray-500 cursor-pointer bg-gray-300 rounded-full"
    //     >
    //       <FaPlus className="text-2xl" />
    //       {extended && <p>New Chat</p>}
    //     </div>

    //     {extended && (
          // <div className="flex flex-col animate-fadeIn duration-1000">
          //   <p className="mt-7 mb-5">Select AI Model</p>

          //   {aiModels.map((ai) => (
          //     <button
          //       key={ai.key}
          //       onClick={() => setChooseAI(ai.key)}
          //       className={`mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[14px] cursor-pointer rounded-full transition
          //       ${
          //         chooseAI === ai.key
          //           ? "bg-blue-500 text-white" // ✅ Stays blue when selected
          //           : "bg-gray-300 hover:bg-gray-400 text-black"
          //       }`}
          //     >
          //       {ai.name}
          //     </button>
          //   ))}
          // </div>
    //     )}
    //   </div>

    //   <div className="flex flex-col">
    //     <div className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
    //       <FaQuestion className="text-2xl" />
    //       {extended && <p>Help</p>}
    //     </div>

    //     <div className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
    //       <MdHistory className="text-2xl" />
    //       {extended && <p>Activity</p>}
    //     </div>

    //     <div className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
    //       <IoSettings className="text-2xl" />
    //       {extended && <p>Settings</p>}
    //     </div>
    //   </div>
    // </div>#1D1E20

    <div className="w-[22%] bg-[#171717] text-white">
      <div className="w-full flex justify-center">
      <input placeholder="Search models..." className="p-2 text-black border-none focus:outline-none bg-[#E5E7EB] rounded-xl w-9/10 h-12 mt-10 " />
      </div>

      <div className="flex flex-col animate-fadeIn duration-1000 p-5">
            

            {aiModels.map((ai) => (
             
                
              <button
                key={ai.key}
                onClick={() => response(ai.key)}
                className={`font-semibold w-full mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[16px] cursor-pointer rounded-md transition
                ${
                  chooseAI === ai.key
                    ? "bg-[#3c3b3b] text-white " // ✅ Stays blue when selected
                    : "bg-[#171717] hover:bg-gray-400 text-white"
                }`}
              >
                <img className=" scale-115 rounded-full h-10 w-10 mr-2" src={ai.img_src} />
                {ai.name}
              </button>
             
            ))}
          </div>
    </div>
  );
};

export default Sidebar;
