import Image from "next/image";

export default function Logo() {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="50"
      width="150"
      src="/images/logo.png"
    />
  );
}
