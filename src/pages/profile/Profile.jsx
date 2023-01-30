import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "./../../components/posts/Posts";
import "./profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src={"/assets/profile-bg/profile-bg-1.avif"}
          alt="pf-bg"
          className="pf-bg"
        />
        <img src={"/assets/user/user.avif"} alt="pf-img" className="pf-img" />
      </div>

      <div className="profile-container">
        <div className="user-info">
          <div className="left">
            <a href="#">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="#">
              <RedditIcon fontSize="large" />
            </a>
            <a href="#">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="#">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>

          <div className="center">
            <h3>Nyizin</h3>
            <div className="info">
              <div className="item">
                <LocationOnIcon />
                <span>Wano</span>
              </div>

              <div className="item">
                <LanguageOutlinedIcon />
                <span>nyi.zin</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
}
