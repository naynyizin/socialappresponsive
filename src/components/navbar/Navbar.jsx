import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useContext } from "react";
import { DarkmodeContext } from "../DarkmodeContext/DarkmodeContext";

export default function Navbar() {
  const { toggle, darkmode } = useContext(DarkmodeContext);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>BloodySocial</h3>
        </Link>
        <HomeOutlinedIcon className="nav-icon" />
        {darkmode ? (
          <WbSunnyOutlinedIcon className="nav-icon" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="nav-icon" onClick={toggle} />
        )}
        <GridViewOutlinedIcon className="nav-icon" />
        <div className="search">
          <SearchOutlinedIcon className="nav-icon" />
          <input type="text" placeholder="Search...." />
        </div>
      </div>
      <div className="navbar-right">
        <PersonOutlineOutlinedIcon className="nav-icon" />
        <EmailOutlinedIcon className="nav-icon" />
        <NotificationsNoneOutlinedIcon className="nav-icon" />
        <div className="user">
          <img src="/assets/user/user.avif" alt="" />
          <span>Nyizin</span>
        </div>
      </div>
    </div>
  );
}
