import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function UserLinksMenu() {
  return (
    <div className="flex gap-8">
      <Link
        href="/profile"
        className="flex flex-col items-center text-[#8B96A5]"
      >
        <FaUserLarge className="mb-1" size="23" />
        <p className="text-xs">Profile</p>
      </Link>
      <Link
        href="/message"
        className="flex flex-col items-center text-[#8B96A5]"
      >
        <MdMessage className="mb-1" size="23" />
        <p className="text-xs">Message</p>
      </Link>
      <Link
        href="/orders"
        className="flex flex-col items-center text-[#8B96A5]"
      >
        <FaHeart className="mb-1" size="23" />
        <p className="text-xs">Orders</p>
      </Link>

      <Link
        href="/my-cart"
        className="flex flex-col items-center text-[#8B96A5]"
      >
        <FaCartShopping className="mb-1" size="23" />
        <p className="text-xs">My cart</p>
      </Link>
    </div>
  );
}
