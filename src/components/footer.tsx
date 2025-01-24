"use client";
import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion"
import { div } from "framer-motion/client";
import Image from "next/image";
function Footer() {
  const [Active, setActive] = useState("home");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonMessage, setComingSoonMessage] = useState("");
  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => setShowComingSoon(false), 3000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [showComingSoon]);

  const getIconColor = (iconName:any) => {
    return Active === iconName ? "#40F522" : "#A5A5A5";
  };

  const getIconOpacity = (iconName:any) => {
    return Active === iconName ? "opacity-100" : "opacity-25";
  };

  return (
    <>
      {showComingSoon && (
  <motion.div 
  animate={{ y: -20 }} 
  className="absolute bottom-20 left-0 right-0 mx-auto flex items-center justify-center z-20"
>
  <div className="font-bold text-[15px] bg-black/90 border border-[#E6FF00] text-[#E6FF00] rounded-lg p-2">
    {comingSoonMessage}
  </div>
</motion.div>
)}

      <footer className="bg-black border-t-4 border-[#E8EC54] backdrop-blur-sm h-20 fixed bottom-0 w-full  rounded-t-3xl">
        <div className="h-full w-full flex gap-10 items-center justify-center">
          <div>
            {/* Update onClick to show the "Coming Soon" text */}
            <Link href=''>
            <Image
            src="/ffooter/Leaderboard.png"
            alt=""
            height={30}
            width={30}
            onClick={() => {
              setShowComingSoon(true);
              setComingSoonMessage("Leaderboard Coming Soon");
              setActive("todo");
            }} 
            />
            </Link>
          </div>
          <Link href='/gamepage'> <Image
            src="/ffooter/Home.png"
            alt=""
            height={70}
            width={70}

            /></Link>
          <Image
            src="/ffooter/TASK.png"
            alt=""
            height={30}
            width={30}

            
           onClick={() => {
            setShowComingSoon(true);
            setComingSoonMessage("Tasks Coming Soon");
            setActive("todo");
          }} />
        </div>
      </footer>
    </>
  );
}

export default Footer;
