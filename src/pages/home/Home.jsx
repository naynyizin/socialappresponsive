import Story from "../../components/story/Story";
import Posts from "../../components/posts/Posts";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Story />
      <Posts />
    </div>
  );
}
