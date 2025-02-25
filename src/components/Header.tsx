import React from 'react';
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between items-center py-4 bg-transparent w-full">
      <div className="flex items-center">
        <Image
          src='/logos/RL.png'
          alt='RL Logo'
          height={23}
          width={33}
        />
      </div>
      
      <div className="flex items-center">
        <Image
          src='/logos/Eclipse_icon.png'
          alt='Eclipse Logo'
          height={60}
          width={60}
        />
      </div>
      
      <div className="flex items-center">
        <Image
          src='/logos/thirdweb-symbol-colour 2.png'
          alt='Thirdweb Logo'
          height={20}
          width={33}
        />
      </div>
    </div>
  );
}

export default Header;
