import Image from "next/image";
import BannerInfo from "./BannerInfo";

function Slider({
  imagebg,
  image,
  contour,
  description1,
  emphasytext,
  descri2,
  position,
  description1b
}: {
  imagebg: string;
  image: string;
  contour: string;
  description1: string;
  emphasytext: string;
  descri2: string;
  position: number;
  description1b:string;
}) {
  return (
    <div className="bg-orange-300 h-[100vh] relative">
      <Image
        src={imagebg}
        alt="bannerimg"
        width={1020}
        height={750}
        className="w-screen relative h-full object-cover"
      />
      <Image
        src={contour}
        alt="bannerimg"
        width={1020}
        height={750}
        className="w-screen absolute top-0 h-full object-cover"
      />
      <div className=" absolute top-0 w-full h-full grid md:grid-cols-2">
        <div className="w-full h-full flex items-start md:mt-24 mt-10 justify-center">
          <div className="flex flex-col space-y-4 w-[80%]">
            {position === 1 ? (
              <BannerInfo
                position={position}
                description1={description1}
                descri2={descri2}
                emphasytext={emphasytext}
                description1b={ description1b}
              />
            ) : (
              <BannerInfo
                position={position}
                description1={description1}
                descri2={descri2}
                emphasytext={emphasytext}
                description1b={ description1b}
              />
            )}
          </div>
        </div>
        <div className="w-full h-full bg-red-300">
          <Image
            src={image}
            alt="bannerimg"
            width={1020}
            height={750}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
