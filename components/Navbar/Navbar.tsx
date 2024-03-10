"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarComponent = () => {

  const pathname = usePathname();

  const isActive = (currPage: string) => {
    return pathname === currPage;
  }


  return (
    <nav className="w-full h-[80px]text-center">
      <div className="px-4 md:px-8 lg:px-16 py-4 flex flex-row items-center justify-between md:mt-4">
        {/* Logo here */}
        <div className="">
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              width={141}
              height={38}
              className="logo"
            />
          </Link>
        </div>

        {/* Navbar Menu Items */}
        <div className="hidden md:flex md:items-center md:justify-between md:gap-x-6 lg:gap-x-10 text-[#828d9c] font-semibold">
          <Link href="/workflow" className={`hover-link ${isActive("/workflow") && "active"}`}>
            Workflow
          </Link>
          <Link href="/scheduling" className={`hover-link ${isActive("/scheduling") && "active"}`}>
            Scheduling
          </Link>
          <Link href="/analytics" className={`hover-link ${isActive("/analytics") && "active"}`}>
            Analytics
          </Link>
          <Link href="/smartHospital" className={`hover-link ${isActive("/smartHospital") && "active"}`}>
            Smart Hospital
          </Link>
          <Link href="/resources" className={`hover-link ${isActive("/resources") && "active"}`}>
            Resources
          </Link>
          <Link href="/about" className={`hover-link ${isActive("/about") && "active"}`}>
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
