import { useRouter } from "next/dist/client/router";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="text-gray-300">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              className="cursor-pointer hover:scale-125  hover:text-white transition duration-100 transform active:text-red-500"
              key={title}
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
