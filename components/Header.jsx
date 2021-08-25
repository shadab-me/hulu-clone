import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header
      className="flex flex-col sm:flex-row m-5
      justify-between
      items-center
      h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl text-center">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="USER" Icon={UserIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
      </div>
      <div className="text-center">
        <Image
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
