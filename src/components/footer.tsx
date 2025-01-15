'use client'

import React, { useState, useEffect } from "react"
import { FaChartSimple } from "react-icons/fa6"
import { Home, Menu } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export default function Component() {
  const [active, setActive] = useState("home")
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [comingSoonMessage, setComingSoonMessage] = useState("")

  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => setShowComingSoon(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showComingSoon])

  const handleClick = (section: string, message: string) => {
    setActive(section)
    setShowComingSoon(true)
    setComingSoonMessage(message)
  }

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

      <footer className="fixed bottom-0 w-full">
        <nav className="mx-4 mb-4">
          <div className="container flex h-16 items-center justify-around bg-black/90 rounded-full border border-[#E6FF00]/20">
            <FaChartSimple
              className="opacity-100 cursor-pointer w-6 h-6 text-[#E6FF00] hover:drop-shadow-[0_0_8px_#E6FF00] transition-all"
              onClick={() => handleClick("chart", "Leaderboard Coming Soon")}
            />
            <Link 
              href="/gamepage" 
              className="relative"
              onClick={() => setActive("home")}
            >
              <Home 
                className={`w-6 h-6 cursor-pointer transition-all ${
                  active === "home" 
                    ? "text-[#E6FF00] drop-shadow-[0_0_8px_#E6FF00]" 
                    : "text-[#E6FF00]"
                }`}
              />
              {active === "home" && (
                <div className="absolute -top-1 right-0 w-1.5 h-1.5 rounded-full bg-[#E6FF00] animate-pulse" />
              )}
            </Link>
            <Menu 
              className="w-6 h-6 cursor-pointer text-[#E6FF00] hover:drop-shadow-[0_0_8px_#E6FF00] transition-all"
              onClick={() => handleClick("todo", "Tasks Coming Soon")}
            />
          </div>
        </nav>
      </footer>
    </>
  )
}

