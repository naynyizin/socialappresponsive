import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="card-left">
          <h1>
            Hello
            <br />
            World.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
            accusantium, magnam facilis qui deleniti. Est eaque dolores
            blanditiis eius?
          </p>

          <div>Don't you have an account?</div>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="card-right">
          <form action="">
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
