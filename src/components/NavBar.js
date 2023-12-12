import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="navbar bg-black z-50">
        <div className="navbar-start z-50">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50">
              <li className="font-bold">
                <a>Product</a>
              </li>
              <li>
                <a className="font-bold">Categories</a>
                <ul className="p-2">
                  <li>
                  <Link href='/featured/Processor'>Processor</Link>
                  </li>
                  <li>
                  <Link href='/featured/Motherboard' >Motherboard</Link>
                  </li>
                  <li>
                  <Link href='/featured/RAM'>RAM</Link>
                  </li>
                  <li>
                  <Link href='/featured/Power Supply Unit' >Power Supply Unit</Link>
                  </li>
                  <li>
                  <Link href='/featured/Storage Device'>Storage Device</Link>
                  </li>
                  <li>
                  <Link href='/featured/Monitor'>Monitor</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a className="font-bold">Contact</a>
              </li>
            </ul>
          </div>
          <Link href='/pcbuild' className="btn btn-ghost normal-case text-xl text-white">PC Build</Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white z-50">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Product</a>
            </li>
            <li tabIndex={0} >
              <details>
                <summary>Categories</summary>
                <ul className="p-2 w-64 text-black">
                <li>
                  <Link href='/featured/Processor'>Processor</Link>
                  </li>
                  <li>
                  <Link href='/featured/Motherboard' >Motherboard</Link>
                  </li>
                  <li>
                  <Link href='/featured/RAM'>RAM</Link>
                  </li>
                  <li>
                  <Link href='/featured/Power Supply Unit' >Power Supply Unit</Link>
                  </li>
                  <li>
                  <Link href='/featured/Storage Device'>Storage Device</Link>
                  </li>
                  <li>
                  <Link href='/featured/Monitor'>Monitor</Link>
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
          <Link href='/pcbuild' className="btn mx-3">PC Build</Link>
          {
              session?.user?

                  <button  className="btn" type="primary" danger onClick={() => signOut()}>
                    Logout
                  </button>
                :
            <Link href='/login' className="btn">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
