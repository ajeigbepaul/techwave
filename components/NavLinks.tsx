import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCaretDown} from "react-icons/rx";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
const NavLinks = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<number | null>(1); // Track active item
  useEffect(() => {
    // Set active item based on pathname when the component mounts or pathname changes
    const activeNavItem =
      navItems.find((item) => {
        // Check if the pathname matches the item's link or if the pathname starts with the item's link
        return pathname === item.link || pathname.startsWith(item.link + "/");
      }) || navItems[0]; // Default to first item (Home)

    setActiveItem(activeNavItem.id);
  }, [pathname]); // Run effect when pathname changes

 
  const handleNavClick = (id: number, link: string) => {
    setActiveItem(id); // Set clicked item as active
    if (link === "#") {
      // If the link is '#', do not navigate, just set active
      return;
    }
    window.location.href = link;
    // Navigate to the link if it's not '#'
  };
  return (
    <div className="md:flex items-center w-full gap-2 text-[14px]">
      {navItems.map((item) => (
        <div
          onClick={() => handleNavClick(item.id, item.link)}
          key={item.id}
          className={cn(
            "flex  items-center md:space-x-2 my-8 px-6 font-normal transition-all duration-75 ease-in list-none w-fit cursor-pointer ",
            activeItem === item.id ||
              (item.link === "#" && activeItem === item.id)
              ? "font-semibold text-[#181818]"
              : "text-[#888888]"
          )}
        >
          <div className="flex items-center justify-center">
            <span>
              <Link href={item?.link}>{item.title}</Link>
            </span>
            {item.subLinks && (
              <div>
                <Dialog >
                  <DialogTrigger asChild>
                    <button className="ml-3 cursor-pointer">
                      <RxCaretDown size={24} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white md:w-1/3 md:max-w-sm mx-auto -mt-14">
                    <DialogHeader className="">
                      <DialogDescription className="border-none">
                        <div
                          className={cn(
                            "z-40 transition-all duration-300 ease-in-out"
                          )}
                        >
                          {" "}
                          {item.subLinks.map((subLink, index) => (
                            <div key={index}>
                              <a
                                href={subLink.link}
                                className="w-full flex items-center space-x-2"
                                onClick={() =>
                                  handleNavClick(item.id, subLink.link)
                                } // Set active item to parent when clicking sublink
                              >
                                <div className="flex w-10 h-10 rounded-full bg-[]">
                                  <Image
                                    src={subLink && subLink?.Icon}
                                    width={24}
                                    height={24}
                                    alt="sub-linkicons"
                                  />
                                </div>
                                <span className="text-sm text-[#181818]">
                                  {subLink.title}
                                </span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="w-full flex gap-3"></DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="flex items-center px-6">
        <Image src={"/flag1.svg"} width={28} height={28} alt="country-flag" />
        <span className="text-[16px] text-[#888888]">ENG</span>
        <RxCaretDown size={24} />
      </div>
    </div>
  );
};

export default NavLinks;
