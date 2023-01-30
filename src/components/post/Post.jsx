import {
  Favorite,
  FavoriteBorder,
  TextsmsOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import "./post.scss";

export default function Post({ post }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(post.like);
  const [comOpen, setComOPen] = useState(false);

  const declike = () => {
    setLike(false);
    setCount(count - 1);
  };

  const inclike = () => {
    setLike(true);
    setCount(count + 1);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <Link
            to={`/profile/${post.userId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="user-info">
              <img src={post.profileImg} alt="" />
              <div className="details">
                <span>{post.name}</span>
                <span className="date">few days ago</span>
              </div>
            </div>
          </Link>
          <MoreHorizIcon />
        </div>
        <div className="user-content">
          <p>{post.desc}</p>
          <img src={post.postImg} alt="" />
        </div>
        <div className="post-footer">
          <div className="footer-item">
            {like ? (
              <Favorite style={{ color: "red" }} onClick={declike} />
            ) : (
              <FavoriteBorder onClick={inclike} />
            )}
            <span>{count} likes</span>
          </div>
          <div
            className="footer-item"
            onClick={() => {
              setComOPen(!comOpen);
            }}
          >
            <TextsmsOutlined />
            <span>{post.comment} comments</span>
          </div>

          <div className="footer-item">
            <ShareOutlined />
            <span>share</span>
          </div>
        </div>
        {comOpen && <Comments />}
      </div>
    </div>
  );
}
