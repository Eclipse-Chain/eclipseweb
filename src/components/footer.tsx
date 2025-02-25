"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Footer() {
  const [active, setActive] = useState("home");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonMessage, setComingSoonMessage] = useState("");

  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => setShowComingSoon(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showComingSoon]);

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

      <footer className="bg-black border-t-4 border-[#E8EC54] backdrop-blur-sm h-20 fixed bottom-0 w-full rounded-t-3xl">
        <div className="h-full w-full flex gap-10 items-center justify-center">
          <div>
            <Image
              src="/ffooter/Leaderboard.png"
              alt="Leaderboard"
              height={30}
              width={30}
              onClick={() => {
                setShowComingSoon(true);
                setComingSoonMessage("Leaderboard Coming Soon");
                setActive("leaderboard");
              }}
            />
          </div>
          
          <Link href='/gamepage'>
            <Image
              src="/ffooter/HOME.png"
              alt="Home"
              height={70}
              width={70}
              onClick={() => setActive("home")}
            />
          </Link>
          
          <Image
            src="/ffooter/TASK.png"
            alt="Tasks"
            height={30}
            width={30}
            onClick={() => {
              setShowComingSoon(true);
              setComingSoonMessage("Tasks Coming Soon");
              setActive("task");
            }}
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
