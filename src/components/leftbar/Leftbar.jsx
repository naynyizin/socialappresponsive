import "./leftbar.scss";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="user">
          <img src="/assets/user/user.avif" alt="" />
          <span>Nyizin</span>
        </div>
        <div className="menu">
          <div className="menu-item">
            <img src="/assets/left-icons/1.png" alt="" />
            <span>Friends</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/2.png" alt="" />
            <span>Groups</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/3.png" alt="" />
            <span>Marketplace</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/4.png" alt="" />
            <span>Watch</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/5.png" alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <p>Your Shortcuts</p>

        <div className="menu">
          <div className="menu-item">
            <img src="/assets/left-icons/6.png" alt="" />
            <span>Events</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/7.png" alt="" />
            <span>Gaming</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/8.png" alt="" />
            <span>Gallery</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/9.png" alt="" />
            <span>Video</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/10.png" alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <p>Others</p>

        <div className="menu">
          <div className="menu-item">
            <img src="/assets/left-icons/13.png" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/11.png" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="menu-item">
            <img src="/assets/left-icons/12.png" alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
