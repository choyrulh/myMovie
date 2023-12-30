import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Headroom from "react-headroom";
import { SearchBar } from "./SearchBar";
import { useContext, useState } from "react";
import { GenreFilter } from "../../../Context/GenreFilterContext";
import { motion } from "framer-motion";
import { HiOutlineBars3 } from "react-icons/hi2";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setSearchQueryActive = useContext(SearchBar);
  const setSearchGenresActive = useContext(GenreFilter);
  const handleClickWindow = () => {
    setSearchQueryActive(false);
    setSearchGenresActive(false);
    window.scrollTo(0, 0);
  };

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const content = (
    <>
      <NavLink
        to="/"
        onClick={handleClickWindow}
        className={({ isActive }) => (isActive ? "text-cyan-500" : undefined)}
        end
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          Home
        </motion.li>
      </NavLink>
      <NavLink
        to="/Show"
        onClick={handleClickWindow}
        className={({ isActive }) => (isActive ? "text-cyan-500" : undefined)}
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          TV Show
        </motion.li>
      </NavLink>
      <NavLink
        to="/Coming"
        onClick={handleClickWindow}
        className={({ isActive }) => (isActive ? "text-cyan-500" : undefined)}
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          Upcoming
        </motion.li>
      </NavLink>
      <NavLink
        to="/About"
        onClick={handleClickWindow}
        className={({ isActive }) => (isActive ? "text-cyan-500" : undefined)}
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          About Us
        </motion.li>
      </NavLink>
      <NavLink
        to="/Contact"
        onClick={handleClickWindow}
        className={({ isActive }) => (isActive ? "text-cyan-500" : undefined)}
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          Contact
        </motion.li>
      </NavLink>
    </>
  );

  return (
    <Headroom>
      <header className="bg-gradient-to-t from-transparent to-[#222222] p-0 top-0 left-0 z-10 w-full flex items-center justify-between">
        <Link to="/" onClick={handleClickWindow}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={logo}
            width={40}
            height={40}
            className="hidden sm:block md:block lg:block p-1 items-center justify-center ml-3"
          />
        </Link>
        <motion.nav
          className="flex items-center p-1 gap-3 font-custom"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-3 mr-7 items-center relative">
            <button
              className={`${
                isMenuOpen ? "bg-black" : ""
              } md:hidden rounded-lg bg-transparent p-2 text-white`}
              onClick={handleClickMenu}
              aria-label="Toggle menu"
            >
              <HiOutlineBars3 className="w-6 h-6" aria-hidden="true" />
            </button>
            <motion.ul
              className={` hidden md:flex space-x-8 items-center pt-4 md:pt-0 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              {content}
            </motion.ul>
            {isMenuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-bold backdrop-blur-sm px-2 py-1 flex flex-col space-y-3 absolute top-10 left-2 rounded-md"
              >
                {content}
              </motion.ul>
            )}
          </div>
        </motion.nav>
        <div className=" flex flex-row gap-3 mr-7 items-center">
          <SearchBar />
          <div>
            <CgProfile className="hidden sm:block md:block lg:block text-3xl" />
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Nav;
