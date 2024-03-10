"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const isActive = (currPage: string) => {
    return pathname === currPage;
  };

  return (
    <motion.footer
      className="bg-[#313c4c] text-white py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hidden md:block lg:px-48 md:px-2 mb-4">
        <hr></hr>
      </div>
      <div className="max-w-6xl mx-auto px-4 flex items-center flex-row justify-between">
        <Link href={"/"}>
          <Image
            src="/assets/images/logo-light.svg"
            alt="Logo"
            width={141}
            height={38}
            className="logo"
          />
        </Link>
        <nav className="flex flex-col md:flex-row justify-center mb-4 md:mb-0">
          <Link
            href="/workflow"
            className={`js-menu-link mr-4 hover:text-blue-300 hover-link ${
              isActive("/workflow") && "active"
            }`}
          >
            Workflow
          </Link>
          <Link
            href="/scheduling"
            className={`js-menu-link mr-4 hover:text-blue-300 hover-link ${
              isActive("/scheduling") && "active"
            }`}
          >
            Scheduling
          </Link>
          <Link
            href="/analytics"
            className={`js-menu-link mr-4 hover:text-blue-300 hover-link ${
              isActive("/analytics") && "active"
            }`}
          >
            Analytics
          </Link>
          <Link
            href="/smartHospital"
            className={`js-menu-link mr-4 hover:text-blue-300 hover-link ${
              isActive("/smartHospital") && "active"
            }`}
          >
            Smart Hospital
          </Link>
          <Link
            href="/resources"
            className={`js-menu-link mr-4 hover:text-blue-300 hover-link ${
              isActive("/resources") && "active"
            }`}
          >
            Resources
          </Link>
          <Link
            href="/about"
            className={`js-menu-link mr-4 hover:text-blue-300 hover-link ${
              isActive("/about") && "active"
            }`}
          >
            About Us
          </Link>
        </nav>
        <p className="hidden lg:block text-xs md:text-sm">
          Copyright &copy; 2021
        </p>
      </div>
      <div className="lg:hidden text-center mt-4 md:mt-0">
        <p className="text-xs md:text-sm">Copyright &copy; 2021</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
