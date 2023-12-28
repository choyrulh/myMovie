import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Headroom from "react-headroom";
import { SearchBar } from "./SearchBar";
import { useContext } from "react";
import { GenreFilter } from "../../../Context/GenreFilterContext";
import { motion } from "framer-motion";

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
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={logo}
            width={40}
            height={40}
            className="p-1 items-center justify-center ml-3"
          />
        </Link>
        <motion.nav
          className="flex items-center p-1 gap-3 font-custom"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul className=" flex gap-5">
            <NavLink
              to="/"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
              end
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
                Home
              </motion.li>
            </NavLink>
            <NavLink
              to="/Show"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
                TV Show
              </motion.li>
            </NavLink>
            <NavLink
              to="/Coming"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
                Upcoming
              </motion.li>
            </NavLink>
            <NavLink
              to="/About"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
                About Us
              </motion.li>
            </NavLink>
            <NavLink
              to="/Contact"
              onClick={handleClickWindow}
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : undefined
              }
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
                Contact
              </motion.li>
            </NavLink>
          </motion.ul>
        </motion.nav>
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
