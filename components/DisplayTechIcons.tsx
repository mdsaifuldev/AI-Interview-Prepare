// Add the "use client" directive at the top of your file
'use client';

import React, { useEffect, useState } from 'react';
import { getTechLogos } from '@/lib/utils';
import Image from 'next/image';

// Define the type for each tech icon object
type TechIcon = {
  tech: string;
  url: string;
};

const DisplayTechIcons = ({ techStack }: { techStack: string[] }) => {
  const [techIcons, setTechIcons] = useState<TechIcon[]>([]); // Specify the type here

  useEffect(() => {
    const fetchTechIcons = async () => {
      const icons = await getTechLogos(techStack);
      setTechIcons(icons);
    };

    fetchTechIcons();
  }, [techStack]);

  return (
    <div className='flex flex-row'>
      {techIcons.slice(0, 3).map(({ tech, url }) => (
        <div key={tech} className='relative group bg-dark-300 rounded-full p-2 flex-center'>
          <span className='tech-tooltip'>
            {tech}
          </span>
          <Image src={url} alt={tech} width={100} height={100} className="size-5" />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
