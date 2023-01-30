import "./rightbar.scss";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span className="item-letter">Suggestions For You</span>

          <div className="user">
            <div className="user-info">
              <img src="/assets/user-img/user-1.avif" alt="" />
              <span>Moonpie</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="user-info">
              <img src="/assets/user-img/user-2.jpeg" alt="" />
              <span>TimberSaw</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span className="item-letter">Suggestions For You</span>

          <div className="user">
            <div className="user-info">
              <img src="/assets/user/user-6.jpeg" alt="" />
              <span>FuckingKid</span>
              <span className="activity">Like a post</span>
            </div>
            <span className="time">1 min ago</span>
          </div>

          <div className="user">
            <div className="user-info">
              <img src="/assets/user/user-1.avif" alt="" />
              <span>Quill</span>
              <span className="activity">change his cover photo</span>
            </div>
            <span className="time">2 hr ago</span>
          </div>

          <div className="user">
            <div className="user-info">
              <img src="/assets/user-img/user-3.jpeg" alt="" />
              <span>Viper</span>
              <span className="activity">Like a comment</span>
            </div>
            <span className="time">2 days ago</span>
          </div>

          <div className="user">
            <div className="user-info">
              <img src="/assets/user-img/user-4.jpeg" alt="" />
              <span>Pangolier</span>
              <span className="activity">posted a new photo</span>
            </div>
            <span className="time">few days ago</span>
          </div>
        </div>

        <div className="item">
          <span className="item-letter">Online Friends</span>

          <div className="user">
            <div className="user-info on-info">
              <div className="img-con">
                <img src="/assets/user/user-1.avif" alt="" />
                <div className="online"></div>
              </div>
              <span>Quill</span>
            </div>
          </div>

          <div className="user">
            <div className="user-info on-info">
              <div className="img-con">
                <img src="/assets/user/user-2.avif" alt="" />
                <div className="online"></div>
              </div>
              <span>Rikimaru</span>
            </div>
          </div>

          <div className="user">
            <div className="user-info on-info">
              <div className="img-con">
                <img src="/assets/user/user-3.avif" alt="" />
                <div className="online"></div>
              </div>
              <span>Nova</span>
            </div>
          </div>

          <div className="user">
            <div className="user-info on-info">
              <div className="img-con">
                <img src="/assets/user/user-4.jpeg" alt="" />
                <div className="online"></div>
              </div>
              <span>JennieKim</span>
            </div>
          </div>

          <div className="user">
            <div className="user-info on-info">
              <div className="img-con">
                <img src="/assets/user/user-5.jpeg" alt="" />
                <div className="online"></div>
              </div>
              <span>ZweGyi</span>
            </div>
          </div>

          <div className="user">
            <div className="user-info on-info">
              <div className="img-con">
                <img src="/assets/user/user-6.jpeg" alt="" />
                <div className="online"></div>
              </div>
              <span>FuckingKid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
