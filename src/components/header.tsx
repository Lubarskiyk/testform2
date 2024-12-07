import NavMenu from "./nav/navMenu.tsx";
import AvatarHeader from "./nav/avatarHeader.tsx";

export default function Header() {
  return (
    <header className=" fixed p-2 top-0 left-0 flex items-center justify-center w-full z-20 bg-amber-800">
      <div className="container flex items-center justify-between w-full">
        <AvatarHeader />
        <NavMenu />
      </div>
    </header>
  );
}
