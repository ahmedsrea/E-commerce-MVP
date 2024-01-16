"use client";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Link href={"/profile"} className="flex flex-col items-center">
        <Image
          src={session?.user?.image || ""}
          width={25}
          height={25}
          alt="User Image"
          className="rounded-full"
        />
        <p className="text-xs mt-1 text-[#8B96A5]">Profile</p>
      </Link>
    );
  }
  return (
    <>
      <Link
        href="/api/auth/signin"
        className="flex flex-col items-center text-[#8B96A5]"
      >
        <FaUserLarge className="mb-1" size="23" />
        <p className="text-xs">Sign in</p>
      </Link>
    </>
  );
}

export default function UserLinksMenu() {
  return (
    <div className="flex gap-8">
      <AuthButton />
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
