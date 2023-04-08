import "./App.css";
import target from "./images/target.png";
import color from "./images/color.png";
import social from "./images/social.png";
import support from "./images/support.png";
import quality from "./images/quality.png";
function App() {
  return (
    <div className="app">
      <div id="one">
        <h2 id="heading">why the Industry chooses clickdee?</h2>
        <p>
          We understand performance marketing from every angle and every stage
          of the funnel. Our client trust that we know what metrics what move
          their business towards growth.Our publisher and affilate partners know
          that we make maximum revenue and ROAS a main focus when growing our
          partnership.
        </p>
      </div>
      <div className="card" id="oneCard">
        <img src={target} alt="target" height="80px" />
        <h2>Choose Your Local Targeting</h2>
      </div>
      <div className="card">
        <img src={social} alt="Social" height="80px" />
        <h2>Track your conversion</h2>
      </div>
      <div></div>
      <div className="card" id="oneCard">
        <img src={color} alt="color" height="80px" />
        <h2>Customized campaigns</h2>
      </div>
      <div className="card">
        <img src={support} alt="support" height="80px" />
        <h2>Get dedicated support team</h2>
      </div>
      <div className="card" id="oneCard">
        <img src={quality} alt="quality" height="80px" />
        <h2>Quality assurance</h2>
      </div>
    </div>
  );
}

export default App;
