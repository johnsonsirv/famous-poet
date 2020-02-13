import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-bg-dark">
    <div className="flex-container audio-icons">
      <span>
        <svg
          id="IconsRepoEditor"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 57 57"
          enableBackground="new 0 0 360 360;"
          xmlSpace="preserve"
          width="35px"
          height="35px"
          fill="#665f5f"
          stroke="#000000"
          strokeWidth="0"
        >
          <g fill="#231F20">
            <path d="M56.461,8.625c-0.333-0.172-0.73-0.145-1.036,0.069L29,27.277V9.5c0-0.373-0.208-0.716-0.539-0.888 c-0.333-0.172-0.731-0.146-1.036,0.07l-27,19C0.158,27.869,0,28.175,0,28.5s0.158,0.631,0.425,0.817l27,19 C27.597,48.439,27.798,48.5,28,48.5c0.157,0,0.315-0.037,0.461-0.112C28.792,48.216,29,47.873,29,47.5V29.723l26.425,18.583 c0.172,0.12,0.373,0.182,0.575,0.182c0.157,0,0.315-0.037,0.461-0.112C56.792,48.203,57,47.86,57,47.487V9.513 C57,9.14,56.792,8.797,56.461,8.625z M27,45.573L2.737,28.5L27,11.427V45.573z M55,45.562L30.738,28.5L55,11.439V45.562z" />
          </g>
        </svg>
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 360 360;"
          width="40px"
          height="40px"
          fill="#665f5f"
          stroke="#000000"
          strokeWidth="0"
        >
          <g fill="#231F20">
            <path d="m354.2,247.4l-135.1-92.4c-4.2-3.1-15.4-3.1-16.3,8.6v184.8c1,11.7 12.4,11.9 16.3,8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2zm-130.5,81.3v-145.4l106.1,72.7-106.1,72.7z" />
            <path d="M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,480.1 C132.4,480.1,31.9,379.6,31.9,256S132.4,31.9,256,31.9S480.1,132.4,480.1,256S379.6,480.1,256,480.1z" />
          </g>
        </svg>
      </span>
      <span>
        <svg
          id="IconsRepoEditor"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 360 360;"
          xmlSpace="preserve"
          fill="#665f5f"
          stroke="#000000"
          strokeWidth="0"
        >
          <g fill="#231F20">
            <path d="M478.411,231.591L254.692,102.42c-3.827-2.212-8.54-2.212-12.371,0c-3.83,2.207-6.185,6.293-6.185,10.712v114.915 L18.556,102.42c-3.829-2.212-8.541-2.212-12.371,0C2.357,104.627,0,108.713,0,113.132v258.331c0,4.418,2.356,8.504,6.185,10.713 c1.914,1.105,4.047,1.658,6.188,1.658c2.137,0,4.27-0.553,6.184-1.658l217.581-125.617v114.904c0,4.418,2.354,8.504,6.185,10.713 c1.914,1.105,4.046,1.658,6.185,1.658s4.271-0.553,6.187-1.658l223.717-129.158c3.828-2.208,6.184-6.295,6.184-10.713 C484.595,237.884,482.239,233.801,478.411,231.591z M24.742,350.037V134.561l186.605,107.743L24.742,350.037z M260.878,350.037 V134.561l186.604,107.743L260.878,350.037z" />
          </g>
        </svg>
      </span>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link nav-buttons nav-buttons-bg-dark" to="/">
            I am a Poet
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link nav-buttons nav-buttons-bg-light" to="/">
            contribute a Poem
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
