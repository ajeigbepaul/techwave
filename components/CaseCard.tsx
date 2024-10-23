import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
// Define styles for each id

const CaseCard = ({
  icon,
  mainimage,
  id,
  sideimage,
  descr,
  cardColor,
}: {
  icon: string;
  mainimage: string;
  id: number;
  sideimage: string;
  descr: string;
  cardColor: string;
}) => {
  // Get the styles for the current id, fallback to default if id doesn't match
  const styles = cardStyles[id] || defaultStyle;
  return (
    <div className="w-full h-[600px] p-0 space-y-2">
      <div
        style={{ backgroundColor: cardColor }}
        className="flex flex-col items-center h-[395px] p-2 rounded-2xl"
      >
        {/* Icon with dynamic size */}
        <div className="h-8 mt-6 w-full">
          <Image
            src={icon}
            alt="cardicon"
            width={styles.iconSize.width}
            height={styles.iconSize.height}
            className={`${styles.iconPosition}`}
          />
        </div>

        {/* Main Image with dynamic size and position */}
        <div className="w-full h-[380px] relative">
          <Image
            src={mainimage}
            alt="mainimage"
            width={styles.mainImageSize.width}
            height={styles.mainImageSize.height}
            className={`object-contain absolute ${styles.mainImagePosition}`}
          />
          {/* Side Image with dynamic size and position */}
          <Image
            src={sideimage}
            alt="sideimage"
            width={styles.sideImageSize.width}
            height={styles.sideImageSize.height}
            className={`object-cover absolute ${styles.sideImagePosition}`}
          />
        </div>
      </div>

      {/* Description with dynamic text size and font weight */}
      <p
        className={`p-4 text-black/80 ${styles.textSize} ${styles.descrFontWeight}`}
      >
        {descr}
      </p>

      {/* Read More section */}
      <div className="flex items-center space-x-2 p-4">
        <h2 className="text-gold font-semibold">Read More</h2>
        <FaArrowRight className="text-gold" />
      </div>
    </div>
  );
};

const defaultStyle = {
  iconSize: { width: 170, height: 100 },
  iconPosition:"object-cover",
  mainImagePosition: "top-10 left-5",
  mainImageSize: { width: 380, height: 350 },
  sideImagePosition: "bottom-0 right-10",
  sideImageSize: { width: 150, height: 150 },
  textSize: "text-sm",
  descrFontWeight: "font-semibold",
};
const cardStyles: {
  [key: number]: {
    iconSize: { width: number; height: number };
    iconPosition:string;
    mainImagePosition: string;
    mainImageSize: { width: number; height: number };
    sideImagePosition: string;
    sideImageSize: { width: number; height: number };
    textSize: string;
    descrFontWeight: string;
  };
} = {
  1: {
    iconSize: { width: 190, height: 100 },
    iconPosition:"object-cover md:ml-32 ml-20",
    mainImagePosition: "top-16 left-5",
    mainImageSize: { width: 300, height: 350 },
    sideImagePosition: "bottom-0 right-8",
    sideImageSize: { width: 130, height: 150 },
    textSize: "text-sm",
    descrFontWeight: "font-semibold",
  },
  2: {
    iconSize: { width: 350, height: 80 },
    iconPosition:"object-cover md:ml-14 ml-1",
    mainImagePosition: "top-[91px] left-6",
    mainImageSize: { width: 320, height: 300 },
    sideImagePosition: "bottom-0 right-0",
    sideImageSize: { width: 150, height: 130 },
    textSize: "text-sm",
    descrFontWeight: "font-semibold",
  },
  3: {
    iconSize: { width: 180, height: 90 },
    iconPosition:"object-cover md:ml-36 ml-20",
    mainImagePosition: "top-20 left-0",
    mainImageSize: { width: 350, height: 340 },
    sideImagePosition: "bottom-3 right-8",
    sideImageSize: { width: 140, height: 160 },
    textSize: "text-sm",
    descrFontWeight: "font-semibold",
  },
  4: {
    iconSize: { width: 120, height: 110 },
    iconPosition:"object-cover md:ml-4",
    mainImagePosition: "top-[72px] left-4",
    mainImageSize: { width: 350, height: 300 },
    sideImagePosition: "bottom-2 right-6",
    sideImageSize: { width: 150, height: 180 },
    textSize: "text-sm",
    descrFontWeight: "font-semibold",
  },
  // default: {
  //   iconSize: { width: 170, height: 100 },
  //   mainImagePosition: "top-10 left-5",
  //   mainImageSize: { width: 380, height: 350 },
  //   sideImagePosition: "bottom-0 right-10",
  //   sideImageSize: { width: 150, height: 150 },
  //   textSize: "text-sm",
  //   descrFontWeight: "font-semibold",
  // },
};
export default CaseCard;
