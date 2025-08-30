// // @flow strict
// import Link from "next/link";


// function Navbar() {
//   return (
//     <nav className="bg-transparent">
//       <div className="flex items-center justify-between py-5">
//         <div className="flex flex-shrink-0 items-center">
//           <Link
//             href="/"
//             className=" text-[#16f2b3] text-3xl font-bold">
//             JANMEJAY SWAIN
//           </Link>
//         </div>

//         <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
//             </Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// @flow strict
"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            JANMEJAY SWAIN
          </Link>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-6">
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/blog", label: "BLOGS" },
            { href: "/#projects", label: "PROJECTS" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-2 px-4 pb-4 md:hidden">
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/blog", label: "BLOGS" },
            { href: "/#projects", label: "PROJECTS" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block text-sm text-white transition-colors duration-300 hover:text-pink-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
