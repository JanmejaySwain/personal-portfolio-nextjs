// // @flow strict
// "use client";
// import { useState } from "react";
// import Link from "next/link";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-transparent">
//       <div className="flex items-center justify-between py-5">
//         {/* Logo */}
//         <div className="flex flex-shrink-0 items-center">
//           <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
//             JANMEJAY SWAIN
//           </Link>
//         </div>

//         {/* Hamburger Button (mobile only) */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex md:space-x-6">
//           {[
//             { href: "/#about", label: "ABOUT" },
//             { href: "/#experience", label: "EXPERIENCE" },
//             { href: "/#skills", label: "SKILLS" },
//             { href: "/#education", label: "EDUCATION" },
//             { href: "/blog", label: "BLOGS" },
//             { href: "/#projects", label: "PROJECTS" },
//           ].map((item) => (
//             <li key={item.label}>
//               <Link
//                 className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                 href={item.href}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <ul className="flex flex-col space-y-2 px-4 pb-4 md:hidden">
//           {[
//             { href: "/#about", label: "ABOUT" },
//             { href: "/#experience", label: "EXPERIENCE" },
//             { href: "/#skills", label: "SKILLS" },
//             { href: "/#education", label: "EDUCATION" },
//             { href: "/blog", label: "BLOGS" },
//             { href: "/#projects", label: "PROJECTS" },
//           ].map((item) => (
//             <li key={item.label}>
//               <Link
//                 href={item.href}
//                 className="block text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// @flow strict
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVersionOpen, setIsVersionOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close version dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVersionOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button") // don’t close if clicking hamburger button
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-transparent relative">
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
        <ul className="hidden md:flex md:space-x-6 items-center">
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

          {/* VERSION Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsVersionOpen(!isVersionOpen)}
              className="text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none"
            >
              VERSION ▾
            </button>

            {isVersionOpen && (
              <ul className="absolute right-0 mt-2 min-w-[100px] bg-gray-900 shadow-lg rounded-md py-1 z-50 text-center">
                <li>
                  <Link
                    href="/"
                    className="block px-3 py-1 text-sm text-white hover:bg-gray-700 rounded"
                    onClick={() => setIsVersionOpen(false)}
                  >
                    v1
                  </Link>
                </li>
                <li>
                  <a
                    href="https://janmejayportfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-white hover:bg-gray-700 rounded"
                    onClick={() => setIsVersionOpen(false)}
                  >
                    v0
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul
          ref={mobileMenuRef}
          className="flex flex-col space-y-2 px-4 pb-4 md:hidden"
        >
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

          {/* VERSION dropdown in mobile */}
          <li className="border-t border-gray-700 pt-2">
            <p className="text-sm text-gray-400 mb-1">VERSION</p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="block text-sm text-white hover:text-pink-600"
                  onClick={() => setIsOpen(false)}
                >
                  v1
                </Link>
              </li>
              <li>
                <a
                  href="https://janmejayportfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white hover:text-pink-600"
                  onClick={() => setIsOpen(false)}
                >
                  v0
                </a>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
