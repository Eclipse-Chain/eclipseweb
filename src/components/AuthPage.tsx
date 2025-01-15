"use client"
import React, { useState } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './footer';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from 'react';
interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}
const GameSelectionUI : React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {

  const [activeButton, setActiveButton] = useState('');

  return (
    <>
      <div className="min-h-screen text-white bg-black bg-[url('/bg/shades.png')] bg-cover">
        <div className="mx-auto max-w-sm">
          <div className="relative min-h-screen px-6 py-4">
            {/* Top Navigation */}
        <Header/>
  
            {/* Sphere Container */}
            <div className="relative mt-12">
              
                  <video
        src="/logos/vedio.mp4"
        loop
        playsInline
        autoPlay
        muted
        className="h-full w-full bg-transparent"
      />
          
            </div>
  
            {/* List Progress */}
            <div className="mt-12">
              <div className="flex items-center gap-1">
                <div className="w-full text-lg font-bold text-center">GAMES</div>
              </div>
            </div>
  
            {/* Trailblazer Section */}
            {/* <div className="mt-8">
              <div className="flex items-center justify-between rounded-xl bg-[#0A1238] p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/20 bg-center  bg-cover bg-[url('/gameimg/cat.png')]"></div>
                  <span className="font-semibold">Paws of Fury</span>
                </div>
                <button className="rounded-lg border border-[#4241ff] px-6 py-2 text-sm font-medium text-[#4241ff]"
                onClick={() => handleGameSelect("unity4")}
                disabled={isLoading}>
                  PLAY
                </button>
              </div>
            </div>


            <div className="mt-8">
              <div className="flex items-center justify-between rounded-xl bg-[#0A1238] p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/20 bg-center  bg-cover bg-[url('/gameimg/baseballz1.png')]"></div>
                  <span className="font-semibold">Base Ballz</span>
                </div>
                <button className="rounded-lg border border-[#4241ff] px-6 py-2 text-sm font-medium text-[#4241ff]"
                onClick={() => handleGameSelect("unity2")}
                disabled={isLoading}>
                  PLAY
                </button>
              </div>
            </div>
             */}
              
           

            

  
            {/* Bottom Navigation */}
            
            {/* <div className="fixed bottom-0 left-0 right-0  from-black to-transparent pb-4 pt-8 ">
              <div className="mx-auto flex max-w-sm items-center justify-between px-12">
                <button className="text-white/60">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </button>
                <button className="absolute inset-0 flex items-center justify-center mb-10">
                <Image
                src='/footer/HOME.png'
                height={70}
                width={70}
                alt=""
                className=""
                />
                </button>
                <button className="text-white/60">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
      
          </div>
        </div>
      </div>

    </>
  );
};

export default GameSelectionUI;






