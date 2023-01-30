import AddIcon from "@mui/icons-material/Add";
import "./story.scss";

// temporary
const stories = [
  {
    id: 1,
    img: "/assets/stories/story-1.avif",
    name: "Rikimaru",
  },

  {
    id: 2,
    img: "/assets/stories/story-2.avif",
    name: "Nova",
  },

  {
    id: 3,
    img: "/assets/stories/story-3.avif",
    name: "Quill",
  },

  {
    id: 4,
    img: "/assets/stories/story-4.avif",
    name: "JenieKim",
  },
];

export default function Story() {
  return (
    <div className="stories">
      <div className="story">
        <img src="/assets/user/user.avif" alt="sty-img" />
        <div className="upload">{/* <AddIcon /> */}+</div>
        <p>Nyizin</p>
      </div>
      {stories.map((sty) => {
        return (
          <div className="story" key={sty.id}>
            <img src={sty.img} alt="sty-img" />
            <p>{sty.name}</p>
          </div>
        );
      })}
    </div>
  );
}
