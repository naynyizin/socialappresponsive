import "./comments.scss";

export default function Comments() {
  // Temporary data

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, provident expedita! Quas exercitationem consectetur provident assumenda explicabo? Voluptatem tenetur minima nobis. Voluptatem beatae odio modi rerum veritatis tenetur omnis enim.",
      name: "Timbersaw",
      profilePic: "/assets/user-img/user-2.jpeg",
      date: "2 hours",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corrupti.",
      name: "Rikimaru",
      profilePic: "/assets/user/user-2.avif",
      date: "11hours",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={"/assets/user/user.avif"} alt="" />
        <input type="text" placeholder="Writ a comment..." />
        <button>Send</button>
      </div>
      {comments.map((com) => {
        return (
          <div className="comment">
            <img src={com.profilePic} alt="com-profimg" />
            <div className="info">
              <div>{com.name}</div>
              <p>{com.desc}</p>
            </div>
            <span className="date">{com.date}</span>
          </div>
        );
      })}
    </div>
  );
}
