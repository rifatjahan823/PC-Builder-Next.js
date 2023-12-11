import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-black z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-black lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              <li>
                <a>Menu</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2 w-64">
                  <li>
                    <a>1 ppppp pppp</a>
                  </li>
                  <li>
                    <a>2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <Link href='/' className="btn btn-ghost normal-case text-xl text-white">PC Build</Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Dropdown</a>
            </li>
            <li tabIndex={0} >
              <details>
                <summary>Categories</summary>
                <ul className="p-2 w-64 text-black">
                  <li>
                    <a>ppppp pppp</a>
                  </li>
                  <li>
                    <a>2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">PC Build</a>
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
