import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ExperienceCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden transition-all duration-500 "></div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
