import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserLinksMenu from "./UserLinksMenu";

export default function Header() {
  return (
    <header className="py-5 border-b border-[#E0E0E0]">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Search />
          <UserLinksMenu />
        </div>
      </Container>
    </header>
  );
}
