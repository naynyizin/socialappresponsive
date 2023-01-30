import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="card-left">
          <h1>
            Bloody
            <br />
            Social.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
            accusantium, magnam facilis qui deleniti. Est eaque dolores
            blanditiis eius?
          </p>

          <div>Do you have an account?</div>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="card-right">
          <form action="">
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
