"use client";
import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { TbTicket } from "react-icons/tb";
import { TbCircleSquare } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const inactiveLink =
    "flex flex-row items-center gap-1 text-base pl-2 py-2 rounded-md w-[230px] mb-1";
  const activeLink =
    inactiveLink + " font-semibold bg-[#F3F4F8] text-[#23272E]";
  const pathname = usePathname();

  return (
    <div className="mt-7">
      <h4 className="text-sm uppercase text-[#8B909A] pl-2 mb-3">main menu</h4>
      <ul className="text-[#8B909A]">
        <li>
          <Link
            href={"/admin"}
            className={pathname === "/admin" ? activeLink : inactiveLink}
          >
            <TbSmartHome size="18" className="mb-[2px]" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href={"/order-management"}
            className={
              pathname === "/order-management" ? activeLink : inactiveLink
            }
          >
            <MdOutlineShoppingCart size="18" className="mb-[2px]" />
            Order Management
          </Link>
        </li>
        <li>
          <Link
            href={"/customers"}
            className={pathname === "/customers" ? activeLink : inactiveLink}
          >
            <LuUsers size="18" className="mb-[2px]" />
            Customers
          </Link>
        </li>
        <li>
          <Link
            href={"/coupen-code"}
            className={pathname === "/coupen-code" ? activeLink : inactiveLink}
          >
            <TbTicket size="18" className="mb-[2px]" />
            Coupen Code
          </Link>
        </li>
        <li>
          <Link
            href={"/categories"}
            className={pathname === "/categories" ? activeLink : inactiveLink}
          >
            <TbCircleSquare size="18" className="mb-[2px]" />
            Categories
          </Link>
        </li>
        <li>
          <Link
            href={"/transaction"}
            className={pathname === "/transaction" ? activeLink : inactiveLink}
          >
            <GrDocumentText size="18" className="mb-[2px]" />
            Transaction
          </Link>
        </li>
        <li>
          <Link
            href={"/brand"}
            className={pathname === "/brand" ? activeLink : inactiveLink}
          >
            <FaRegStar size="18" className="mb-[2px]" />
            Brand
          </Link>
        </li>
      </ul>
    </div>
  );
}
