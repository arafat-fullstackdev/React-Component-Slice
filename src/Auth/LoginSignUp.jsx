import {User,Mail,Key} from 'lucide-react';
import './LoginSignUp.css';
const LoginSignUp = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="sign">Sign</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <User/>
          <input type="text" placeholder="name" className="input" />
        </div>
        <div className="input">
          <Mail />

          <input type="email" placeholder="email" className="input" />
        </div>
        <div className="input">
          <Key />

          <input type="password" placeholder="Password" className="input" />
        </div>

      </div>
     <div className="forgetPass">Forget Password ?<span>Click Here!</span></div>
  <div className="submitContainer">
    <div className="sign">Sign Up</div>
    <div className="sign">Login</div>
  </div>
    </div>
  );
};

export default LoginSignUp;
