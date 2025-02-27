"use client"
import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import Link from 'next/link';

interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}

const GameSelectionUI: React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {
  return (
    <>
      <div className="min-h-screen text-white bg-black">
        <div className="mx-auto max-w-sm">
          <div className="relative min-h-screen px-6 py-4 pb-24">
            {/* Top Navigation */}
            <Header />
            
            {/* Sphere Container */}
            <div className="relative mt-8">
              <video
                src="/bg/EclipseVid.mp4"
                loop
                playsInline
                autoPlay
                muted
                className="mix-blend-lighten h-full w-full bg-transparent rounded-full"
              />
              <div className="text-xl font-bold absolute inset-0 flex gap-4 flex-col items-center justify-center text-center">
                <div>
                  THE BACKEND OF<br/> GAMING
                </div>
                <Link href="https://eclipsechain.org/">
                  <button className="px-4 py-1 rounded-[11px] border-2 border-[#E6FF00] bg-black text-[#E6FF00] text-md font-bold hover:bg-[#E6FF00] hover:text-black transition-colors">
                    WEB
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Games Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">GAMES</div>
                <div className="flex space-x-1">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Game List */}
            <div className="mt-6">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="h-[60px] w-[60px] rounded-lg bg-cover border-2 border-[#E6FF00] flex items-center justify-center"
                       style={{backgroundImage: "url('/gameimg/EclipseJumper_icon.jpg')"}}> 
                  </div>
                  <span className="font-semibold text-white text-md">Eclipse Jumper</span>
                </div>
                <button
                  onClick={() => onGameSelect("unity3")}
                  disabled={isLoading}
                  className="px-4 py-1 rounded-[11px] border-2 border-[#E6FF00] bg-black text-[#E6FF00] text-md font-bold hover:bg-[#E6FF00] hover:text-black transition-colors"
                >
                  PLAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default GameSelectionUI;
