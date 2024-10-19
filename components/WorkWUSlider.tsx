import Image from 'next/image';
import React from 'react'

const WorkWUSlider = ({img=""}) => {
    return (
        <div>
          <Image src={img} alt="bannerimg" width={40} height={40} className="md:w-32 w-48 h-[10vh] object-contain"/>
        </div>
      );
    }


export default WorkWUSlider