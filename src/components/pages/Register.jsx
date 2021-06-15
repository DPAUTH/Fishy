import "./Register.css";
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Sign up</h3>
          <span className="registerDesc">
            Join the Fishy community
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Confirm Password" className="registerInput" />
            <button className="registerButton">Sign Up</button>
            <span className="registerLoginQuestion">Already have an account?</span>
            <Link to='/login'>
            <button className="registerLoginButton">
              Log into Account
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}