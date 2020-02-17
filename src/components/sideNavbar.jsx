import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const SideNavbar = () => (
  <nav className="side-nav navbar-bg-default">
    <div className="logo flex-container">
      <Link className="" to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
    <div className="">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link flex-container navlink-with-icon" to="/">
            <div className="icon home-active-icon">
              <svg
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="pd-0">Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link flex-container navlink-with-icon" to="/">
            <div className="icon search-icon">
              <svg
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <span>Search</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link flex-container navlink-with-icon" to="/">
            <div className="icon collection-icon">
              <svg
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span>Playlist</span>
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="credits-section flex-container mt-auto">
      <div className="credits-header">
        <span>Credits:</span>
      </div>
      <div className="credits-footer">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link navlink-with-icon p-2"
              href="https://www.poetryfoundation.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Poetry Foundation</span>
            </a>
            <a
              className="nav-link navlink-with-icon p-2"
              href="http://badilishapoetry.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Badilisha Poetry</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default SideNavbar;
