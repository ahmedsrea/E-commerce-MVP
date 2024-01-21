import Logo from "@/components/header/Logo";
import MainMenu from "./MainMenu";
import Products from "./Products";

export default function Sidebar() {
  return (
    <section className="xl:pl-7 xl:pr-4 md:px-4 sm:px-2 pt-5 bg-white w-fit">
      <Logo />
      <MainMenu />
      <Products />
    </section>
  );
}
