import React, { useContext, useState } from "react";
import navStyles from "./styles/Navbar.module.css";
import { FaBars, FaMicrophone, FaSearch, FaRegBell } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { CgMenuGridO } from "react-icons/cg";
import { RiVideoAddLine } from "react-icons/ri";
import contextapi from "../context/contextapi";
import { GoogleLogout, GoogleLogin } from "react-google-login";
const Navbar = () => {
  const clientId = process.env.CLIENT_ID;
  const [profile, setprofile] = useState({});
  const TogglerState = useContext(contextapi);
  const { setToggler, toggler } = TogglerState;
  const [search, setSearch] = useState("");
  const HamburgerState = () => {
    toggler === false ? setToggler(true) : setToggler(false);
  };
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    setprofile(res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };
  const onLoginFailure = (res) => {
    alert("Login failed");
  };
  const onSignoutSuccess = () => {
    setShowloginButton(true);
    setShowlogoutButton(false);
  };
  return (
    <nav className={navStyles.navbar}>
      <div>
        {/* Navbar Left */}
        <div className={navStyles.navbar_left}>
          <button className={navStyles.barBtn} onClick={HamburgerState}>
            <FaBars />
          </button>
          <ImYoutube2 className={navStyles.yticon} />
        </div>
        {/* Navbar Center */}
        <div className={navStyles.navbar_center}>
          <form
            target="_blank"
            action={`https://www.youtube.com/results?search_query=${search}`}
            method="post"
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className={navStyles.searchBtn}>
              <FaSearch className={navStyles.searchIcon} />
            </button>
          </form>
          <button className={navStyles.micBtn}>
            <FaMicrophone className={navStyles.micIcon} />
          </button>
        </div>
        {/* Navbar Right */}
        <div className={navStyles.navbar_right}>
          {showlogoutButton ? (
            <button>
              <RiVideoAddLine />
            </button>
          ) : null}
          <button>
            <CgMenuGridO />
          </button>
          {showlogoutButton ? (
            <div className={navStyles.bell_container}>
              <button className={navStyles.bellBtn}>
                <FaRegBell className={navStyles.bellIcon} />
              </button>
            </div>
          ) : null}
          {showlogoutButton ? (
            <img src={profile.imageUrl} alt="Profile" />
          ) : null}
          <div className={navStyles.google_btn}>
            {showloginButton ? (
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign In"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            ) : null}

            {showlogoutButton ? (
              <GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSignoutSuccess}
              ></GoogleLogout>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
