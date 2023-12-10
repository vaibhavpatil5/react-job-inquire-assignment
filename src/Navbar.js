  import React from 'react';

  const Navbar = () => {
    return (
      <>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <img
              src="https://scontent.fpnq1-1.fna.fbcdn.net/v/t39.30808-1/362654363_664332785716096_1838982147874835933_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=103&ccb=1-7&_nc_sid=4da83f&_nc_ohc=6comVKRW8XgAX-lwhIX&_nc_ht=scontent.fpnq1-1.fna&oh=00_AfDHFnnvJMKjKhxHwIcgr1mp-eKGSuhEHHC4ga87Y4UBKA&oe=657A5006"
              className="w-16"
              alt=""
            />
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="user"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Navbar;
