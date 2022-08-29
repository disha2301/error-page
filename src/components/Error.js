import "./Error.css";
import clip from "./clip2.jpg";
const Error = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="text">
          <h1>404: PAGE NOT FOUND</h1>
          <h2>OOPS</h2>
          <h3>Looks like you are lost :(</h3>
        </div>
        <a href="#">Go back home</a>
      </div>
      <div className="right">
        <img src={clip} alt="" />
      </div>
    </div>
  );
};

export default Error;
