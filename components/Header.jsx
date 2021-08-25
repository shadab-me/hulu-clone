import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="">
      <div>
        <HeaderItem title="Home" icon="I" />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
};

export default Header;
