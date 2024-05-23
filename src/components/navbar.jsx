"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaLinkedin } from "react-icons/fa";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeSidebar = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', closeSidebar);
    } else {
      document.removeEventListener('click', closeSidebar);
    }

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <LeafIcon className="h-6 w-6 text-green-500" />
            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50">NutureMite</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link className="text-xs font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/About">
              About Us
            </Link>
            <Link className="text-xs font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/contact">
              Contact Us
            </Link>
            <Button size="icon" variant="ghost">
              <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button className="md:hidden" size="icon" variant="ghost" onClick={toggleSidebar}>
            <MenuIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
        <nav className="hidden  md:flex items-center justify-center mb-3 gap-5  text-bold ">
  <Link className="text-sm  font-medium text-white bg-blue-500 hover:text-white p-2 dark:text-gray-400 dark:hover:text-gray-50" href="/">
    Home
  </Link>
  <Link className="text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white p-2 dark:text-gray-400 dark:hover:text-gray-50" href="#">
    Blog
  </Link>
  <Link className="text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white p-2 dark:text-gray-400 dark:hover:text-gray-50" href="#">
    Shop Cart
  </Link>
  <Link className="text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white p-2 dark:text-gray-400 dark:hover:text-gray-50" href="#">
    My Account
  </Link>
  <Link className="text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white p-2 dark:text-gray-400 dark:hover:text-gray-50" href="#">
    About Us
  </Link>
  <Link className="text-sm font-medium text-blue-600  hover:bg-blue-600 hovbg-blue-500 hover:text-white p-2 p-2 dark:text-gray-400 dark:hover:text-gray-50" href="#">
    Log In
  </Link>
  <Link className="text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white p-2 dark:text-gray-400 dark:hover:text-gray-50" href="#">
    Register
  </Link>
  <div className="flex text-2xl gap-4">
      <FaFacebook className="rounded-full p-1 transition duration-300 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-125" />
      <FaTwitter className="rounded-full p-1 transition duration-300 ease-in-out transform hover:bg-blue-400 hover:text-white hover:scale-125" />
      <FaYoutube className="rounded-full p-1 transition duration-300 ease-in-out transform hover:bg-red-500 hover:text-white hover:scale-125" />
      <FaInstagram className="rounded-full p-1 transition duration-300 ease-in-out transform hover:bg-pink-500 hover:text-white hover:scale-125" />
      <FaLinkedin className="rounded-full p-1 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white hover:scale-125" />
    </div>
</nav>

      </header>
      
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full bg-gray-100 dark:bg-gray-800 w-56 md:w-72 border-l border-gray-200 z-50"
          >
            <div className="flex justify-end p-4">
              <Button size="icon" variant="ghost" onClick={toggleSidebar}>
                <MenuIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Close navigation</span>
              </Button>
            </div>
            <nav className="flex flex-col gap-4 p-4 mt-4">
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Home
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Blog
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Shop Cart
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                My Account
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                About Us
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Log In
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Register
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
