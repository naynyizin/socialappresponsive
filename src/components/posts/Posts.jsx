import Post from "../post/Post";
import "./posts.scss";

const posts = [
  {
    id: 1,
    userId: 1,
    profileImg: "/assets/user/user.avif",
    name: "Nyizin",
    desc: "Do u wanna fight with that vibe :)",
    postImg: "/assets/posts/post-1.avif",
    like: 50,
    comment: 12,
  },
  {
    id: 2,
    userId: 1,
    profileImg: "/assets/user/user.avif",
    name: "Nyizin",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum recusandae, consequuntur cum nulla doloribus voluptates aliquid et natus laboriosam eius, quam architecto?",
    like: 12,
    comment: 5,
  },
  {
    id: 3,
    userId: 3,
    profileImg: "/assets/user/user-1.avif",
    name: "Quill",
    desc: "yummy yummy!",
    postImg: "/assets/posts/post-3.avif",
    like: 33,
    comment: 15,
  },
  {
    id: 4,
    userId: 4,
    profileImg: "/assets/user/user-4.jpeg",
    name: "JennieKim",
    desc: "I'm so lonely...",
    postImg: "/assets/posts/post-4.jpeg",
    like: 22,
    comment: 20,
  },

  {
    id: 5,
    userId: 5,
    profileImg: "/assets/user/user-5.jpeg",
    name: "ZweGyi",
    desc: "Together Forever",
    postImg: "/assets/posts/post-5.avif",
    like: 25,
    comment: 21,
  },

  {
    id: 6,
    userId: 6,
    profileImg: "/assets/user-img/user-4.jpeg",
    name: "Pangolier",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora quia atque est magni laudantium aliquid at voluptatem consequuntur explicabo voluptatibus quaerat ab, deserunt, neque, beatae unde? Ducimus, quisquam amet quam quae quas inventore veritatis?",

    like: 25,
    comment: 21,
  },

  {
    id: 7,
    userId: 7,
    profileImg: "/assets/user/user-6.jpeg",
    name: "FuckingKid",
    desc: "Downtown",
    postImg: "/assets/posts/post-6.jpeg",
    like: 25,
    comment: 21,
  },
  {
    id: 8,
    userId: 8,
    profileImg: "/assets/user-img/user-3.jpeg",
    name: "Viper",
    desc: "Our Planet",
    postImg: "/assets/posts/post-7.jpeg",
    like: 25,
    comment: 21,
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {posts.map((pts) => {
        return <Post post={pts} key={pts.id} />;
      })}
    </div>
  );
}
