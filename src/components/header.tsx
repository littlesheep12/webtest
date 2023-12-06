"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";
import photo from "@/assets/logo1.png";

const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

const montserrat = localFont({
  src: "../assets/Montserrat-Bold.ttf", 
  display: "swap",
});

export default function Header() {
  // const links = ["about", "skills", "contact"];
  const links = [
    { text: "ABOUT", href: "/about" },
  ];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">

        <div className="container flex flex-col items-center justify-between md:flex-row">

        <div>
          <Link href="/">
              <Image
                src={photo}
                alt="photo"
                priority
                className="w-[70px] min-w-[50px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
              />
          </Link>
        </div>


          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <Link key={link.text} href={link.href}>
                <p>{link.text}</p>
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}
