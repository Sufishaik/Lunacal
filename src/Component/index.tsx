import React, { useState } from "react";
import Ques from "../assets/Vector (21).png";
import Apps from "../assets/Frame 1000002250.png";
import leftBar from "../assets/Rectangle 39335.png";
import leftArrow from "../assets/Component 5.png";
import MiddleBar from "../assets/Rectangle 5.png";
import rightArrow from "../assets/Component 312.png";
import Img from "../assets/Rectangle 5160.png";
function Home() {
  const [selectedTab, setSelectedTab] = useState("");

  const buttonStyles =
    "text-white bg-zinc-900 p-1 rounded-[15px] w-[150px] h-[40px] text-lg transition-all duration-300";
  const activeButtonStyles =
    "shadow-[0px_9px_18px_15px_rgba(0,0,0,1)] bg-zinc-800 h-[45px] w-[160px] text-xl font-bold";
  return (
    <div>
      <div className="bg-gray-800 w-full">
        <div className=" p-8 rounded-lg max-w-3xl mx-auto">
          <div className="flex gap-5 flex-col">
            <div className="flex flex-col space-y-4">
              <div className="bg-[#363C43] p-4 rounded-[15px]">
                <div className="flex gap-5">
                  <img src={Ques} alt="" className="h-[25px]" />
                  <div className="flex flex-wrap gap-10 w-[100%] m-auto bg-black p-2 rounded-[20px] items-center mb-4">
                    <button
                      className={`${buttonStyles} ${
                        selectedTab === "About Me" ? activeButtonStyles : ""
                      }`}
                      onClick={() => setSelectedTab("About Me")}
                    >
                      About Me
                    </button>

                    <button
                      className={`${buttonStyles} ${
                        selectedTab === "Experiences" ? activeButtonStyles : ""
                      }`}
                      onClick={() => setSelectedTab("Experiences")}
                    >
                      Experiences
                    </button>

                    <button
                      className={`${buttonStyles} ${
                        selectedTab === "Recommended" ? activeButtonStyles : ""
                      }`}
                      onClick={() => setSelectedTab("Recommended")}
                    >
                      Recommended
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-5">
                  <img src={Apps} alt="" className="mt-8" />
                  <div className="text-[#969696] w-[100%] m-auto">
                    <p>
                      Hello! I'm Dave, your sales rep here from Salesforce. I’ve
                      been working at this awesome company for 3 years now.
                    </p>
                    <p className="mt-2">
                      I was born and raised in Albany, NY & have been living in
                      Santa Carla for the past 10 years my wife Tiffany and my 4
                      year old twin daughters - Emma and Ella. Both of them are
                      just starting school, so my calendar is usually blocked
                      between 9–10 AM. This is a...
                    </p>
                  </div>
                  <img src={leftBar} alt="" className="mt-2" />
                </div>
              </div>
            </div>
            <div className="m-auto">
              <img src={MiddleBar} alt="" />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="bg-[#363C43] p-4 rounded-[15px]">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <div className="flex gap-5">
                    <img src={Ques} alt="" className="h-[25px]" />
                    <button className="text-white font-semibold bg-black px-[2rem] py-[0.8rem] rounded-[7px]">
                      Gallery
                    </button>
                  </div>
                  <div className="flex gap-0 items-center justify-center">
                    <button className="text-white shadow-[0px_0px_10px_1px_rgba(108,108,108)] bg-[#363C43] rounded-[25px] px-[1rem] h-[50px]">
                      + Add Image
                    </button>
                    <img src={leftArrow} alt="" className="w-[80px]" />
                    <img src={rightArrow} alt="" className="w-[80px]" />
                  </div>
                </div>
                <div className="flex gap-5">
                  <img src={Apps} alt="" className="h-[25px]" />
                  <div className="flex space-x-2 flex-wrap gap-5">
                    <img src={Img} alt="Gallery Image" className="rounded-lg" />
                    <img src={Img} alt="Gallery Image" className="rounded-lg" />
                    <img src={Img} alt="Gallery Image" className="rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto">
              <img src={MiddleBar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
