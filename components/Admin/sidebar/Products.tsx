"use client";
import { Box, Camera } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuBox } from "react-icons/lu";

export default function Products() {
  const inactiveLink =
    "flex flex-row items-center gap-1 text-base pl-2 py-2 rounded-md w-[230px] mb-1";
  const activeLink =
    inactiveLink + " font-semibold bg-[#F3F4F8] text-[#23272E]";
  const pathname = usePathname();

  return (
    <div className="mt-7">
      <h4 className="text-sm uppercase text-[#8B909A] pl-2 mb-3">products</h4>
      <ul className="text-[#8B909A]">
        <li>
          <Link
            href={"/admin/add-product"}
            className={
              pathname === "/admin/add-product" ? activeLink : inactiveLink
            }
          >
            <IoIosAddCircleOutline size="18" className="mb-[2px]" />
            Add Product
          </Link>
        </li>
        <li>
          <Link
            href={"/product-list"}
            className={pathname === "/product-list" ? activeLink : inactiveLink}
          >
            <LuBox size="18" className="mb-[2px]" />
            <Box size={18} />
            Product List
          </Link>
        </li>
      </ul>
    </div>
  );
}
