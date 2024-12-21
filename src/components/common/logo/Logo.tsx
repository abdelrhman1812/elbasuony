import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-[rgb(0,0,1] flex items-center font-Poppins text-[27px] font-semibold uppercase text-black"
      passHref
    >
      Elbasuony.
    </Link>
  );
};

export default Logo;
