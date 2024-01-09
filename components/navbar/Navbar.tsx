import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import Container from "../Container";
import { MdExpandMore } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  return (
    <nav className="py-4 border-b border-[#E0E0E0] bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-9">
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                <IoMenuSharp size="22" /> All category
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                Hot offers
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                Gift boxes
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                Menu item
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                Help <MdExpandMore className="text-[#8B96A5]" size="22" />
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-9">
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                English, USD{" "}
                <MdExpandMore className="text-[#8B96A5]" size="22" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-1 items-center text-[#1C1C1C] text-[15px] font-medium"
              >
                Ship to{" "}
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  title="US"
                />
                <MdExpandMore className="text-[#8B96A5]" size="22" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
