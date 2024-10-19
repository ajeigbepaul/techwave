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
        className="flex flex-col items-center h-[406px] p-2 rounded-2xl"
      >
        {/* Icon with dynamic size */}
        <div className="h-24">
          <Image
            src={icon}
            alt="cardicon"
            width={styles.iconSize.width}
            height={styles.iconSize.height}
            className="object-cover"
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
    mainImagePosition: string;
    mainImageSize: { width: number; height: number };
    sideImagePosition: string;
    sideImageSize: { width: number; height: number };
    textSize: string;
    descrFontWeight: string;
  };
} = {
  1: {
    iconSize: { width: 170, height: 100 },
    mainImagePosition: "top-10 left-5",
    mainImageSize: { width: 350, height: 350 },
    sideImagePosition: "bottom-0 right-4",
    sideImageSize: { width: 150, height: 150 },
    textSize: "text-sm",
    descrFontWeight: "font-semibold",
  },
  2: {
    iconSize: { width: 300, height: 80 },
    mainImagePosition: "top-12 left-8",
    mainImageSize: { width: 360, height: 300 },
    sideImagePosition: "bottom-5 right-12",
    sideImageSize: { width: 130, height: 130 },
    textSize: "text-sm",
    descrFontWeight: "font-semibold",
  },
  3: {
    iconSize: { width: 140, height: 90 },
    mainImagePosition: "top-8 left-6",
    mainImageSize: { width: 405, height: 340 },
    sideImagePosition: "bottom-3 right-8",
    sideImageSize: { width: 160, height: 160 },
    textSize: "text-sm",
    descrFontWeight: "font-semibold",
  },
  4: {
    iconSize: { width: 100, height: 110 },
    mainImagePosition: "top-6 left-4",
    mainImageSize: { width: 400, height: 370 },
    sideImagePosition: "bottom-2 right-6",
    sideImageSize: { width: 180, height: 180 },
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
