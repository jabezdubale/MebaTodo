import "./login.scss";
import leftellipse from "../../assets/Login/login_Ellipse.png";
import leftellipse2 from "../../assets/Login/login_Ellipse2.png";
import rightellipse3 from "../../assets/Login/login_Ellipse3.png";
import topellipse from "../../assets/Login/login_curve1.png";
import bottomellipse from "../../assets/Login/login_curve2.png";
import laptop from "../../assets/Login/loginWorktable.png";
import logo from "../../assets/Login/Mebalogo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <img src={logo} className="logo" />
          <form className="loginform">
            <input type="email" placeholder="EMAIL" className="logininput" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="logininput"
            />
            <button className="loginbutton">LOGIN</button>
          </form>
          <div className="belowLogin">
            <hr />
            <div className="or">OR</div>
            <hr />
          </div>
          <button className="signupbutton">SIGN UP</button>
        </div>
        <div className="right">
          <img src={laptop} alt="workSpace" className="laptop" />
        </div>
      </div>
      <div className="backgroundimages">
        <img src={leftellipse} alt="" className="leftEllipse" />
        <img src={leftellipse2} alt="" className="leftEllipse2" />
        <img src={rightellipse3} alt="" className="rightEllipse3" />
        <img src={topellipse} alt="" className="topellipse" />
        <img src={bottomellipse} alt="" className="bottomellipse" />
      </div>
    </div>
  );
};

export default Login;
