import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  const [theme, setTheme] = useState("light");

  
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const themeChange = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
      <div className="flex-1">
        <a className="btn btn-ghost gap-0 text-2xl font-bold">
          Tech<span className="text-teal-700">Trendz</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-white text-md  bg-teal-600' : 'text-md font-bold text-teal-600'}>Home</NavLink>


          </li>
          <li className="text-md font-bold text-teal-600">
            <NavLink to = '/blogs' className={({ isActive }) => isActive ? 'text-white  bg-teal-600' : 'text-md font-bold text-teal-600'} >Blogs</NavLink>
          </li>
          <li className="text-md font-bold text-teal-600">
          <NavLink to = '/bookmarks' className={({ isActive }) => isActive ? 'text-white  bg-teal-600' : 'text-md font-bold text-teal-600'}>Bookmarks</NavLink>
          </li> 

         <label className="flex cursor-pointer gap-2 mt-2 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={themeChange}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
