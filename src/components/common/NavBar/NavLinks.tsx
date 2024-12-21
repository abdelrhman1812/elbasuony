"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex items-center justify-end">
      <MobileNav />
      <div className="hidden h-[49px] items-center justify-end space-x-[50px] lg:flex">
        <ul className="navbar-nav flex space-x-[50px]">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item group relative">
              <Link legacyBehavior href={link.path}>
                <a
                  className={`nav-link relative h-[22px] w-[53px] text-[18px] ${isActive(link.path) ? "text-black" : "text-grayMuted"} transition-all duration-300 ease-in-out`}
                >
                  {link.name}
                  <span className="absolute -bottom-3 left-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={"/contact"}
          className="group/button relative inline-flex h-[49px] w-[183px] items-center justify-center overflow-hidden rounded-md border border-white/20 bg-bgBtn px-6 py-2 text-base font-semibold text-white backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50"
        >
          <span className="text-lg"> Get In Touch</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
