import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Headroom from "react-headroom";
import { SearchBar } from "./SearchBar";
import { useContext } from "react";
import { GenreFilter } from "../../../Context/GenreFilterContext";

const Nav = () => {
  const setSearchQueryActive = useContext(SearchBar);
  const setSearchGenresActive = useContext(GenreFilter);
  const handleClickWindow = () => {
    setSearchQueryActive(false);
    setSearchGenresActive(false);
    window.scrollTo(0, 0);
  };
  return (
    <Headroom>
      <header className="bg-gradient-to-t from-transparent to-[#222222] p-0 top-0 left-0 z-10 w-full flex items-center justify-between">
        <Link to="/" onClick={handleClickWindow}>
          <img
            src={logo}
            width={40}
            height={40}
            className="p-1 items-center justify-center ml-3"
          />
        </Link>
        <nav className="flex items-center p-1 gap-3 font-custom">
          <ul className=" flex gap-5">
            <NavLink
              to="/"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
              end
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/Show"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <li>TV Show</li>
            </NavLink>
            <NavLink
              to="/Coming"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <li>Upcoming</li>
            </NavLink>
            <NavLink
              to="/About"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <li>About Us</li>
            </NavLink>
            <NavLink
              to="/Contact"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <li>Contact</li>
            </NavLink>
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
