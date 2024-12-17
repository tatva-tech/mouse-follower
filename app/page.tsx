"use client";

import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursorInstance = new MouseFollower({
      textClassName: 'mf-cursor-text text-[#fff]'
    });

    return () => {
      if (cursorInstance !== null) {
        cursorInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh] gap-x-[100px] p-5 bg-gradient-to-t from-pink-100 via-white to-purple-100">
      <div data-cursor-text="Hello!" className="h-[300px] w-[500px] text-xl font-[500] shadow-lg rounded-3xl border border-black flex justify-center items-center">
        Hover me to see text
      </div>
      {/* <div data-cursor-img="https://www.pacegallery.com/media/images/16_9-2.width-2000.png" className="h-[300px] text-xl font-[500] shadow-lg rounded-3xl border border-black flex justify-center items-center">
        Hover me to see image
      </div> */}
      {/* <div data-cursor-video="/video.mp4" className="h-[300px] text-xl font-[500] shadow-lg rounded-3xl border border-black flex justify-center items-center">
        Hover me to see video
      </div> */}
    </div>
  );
}
