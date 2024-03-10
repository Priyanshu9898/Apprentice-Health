import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
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
          <Link href="/workflow">Workflow</Link>
          <Link href="/scheduling">Scheduling</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/smartHospital">Smart Hospital</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;