import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Headroom from "react-headroom";
import { SearchBar } from "./SearchBar";

const Nav = () => {
  return (
    <Headroom>
      <header className="bg-gradient-to-t from-transparent to-[#222222] p-0 top-0 left-0 z-10 w-full flex items-center justify-between">
        <img
          src={logo}
          width={40}
          height={40}
          className="p-1 items-center justify-center ml-3"
        />
        <nav className="flex items-center p-1 gap-3 font-custom">
          <ul className=" flex gap-5">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <li>Home</li>
            </Link>
            <Link to="/Show" onClick={() => window.scrollTo(0, 0)}>
              <li>TV Show</li>
            </Link>
            <Link to="/Coming" onClick={() => window.scrollTo(0, 0)}>
              <li>Upcoming</li>
            </Link>
            <Link to="/About" onClick={() => window.scrollTo(0, 0)}>
              <li>About Us</li>
            </Link>
            <Link to="/Contact" onClick={() => window.scrollTo(0, 0)}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <div className=" flex flex-row gap-3 mr-7 items-center">
          <SearchBar />
          <div>
            <CgProfile className=" text-3xl" />
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Nav;
