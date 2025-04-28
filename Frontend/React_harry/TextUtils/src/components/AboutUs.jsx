import "../App.css";
import {useState} from "react";

export default function AboutUs() {


// Dark Mode State variable 
let [darkStyle, setDarkStyle] = useState({
  backgroundColor: "white",
  color: "black",
});


// Dark Mode button name 
let [darkBtnLabel, setDarkBtnLabel] = useState("Light Mode");
 

function handleDarkMode() {
  setDarkStyle(
    (preStyle) => {
      if(preStyle.backgroundColor === "white" && preStyle.color === "black"){
        return {
          backgroundColor: "black",
          color: "white",
        };
      }else {
        return {
          backgroundColor: "white",
          color: "black",
        };
      }
    }
  );
  
  setDarkBtnLabel(
    (preLabel) => {
      return (preLabel === "Light Mode" ? "Dark Mode" : "Light Mode");
    }
  )

}

  return (
    <div className="accordion" id="accordionExample" style={darkStyle}>
      <div className="accordion-item" style={darkStyle}>
        <h2 className="accordion-header" style={darkStyle}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={darkStyle}
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
          style={darkStyle}
        >
          <div className="accordion-body" style={darkStyle}>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={darkStyle}>
        <h2 className="accordion-header" style={darkStyle}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={darkStyle}
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
          style={darkStyle} 
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={darkStyle}>
        <h2 className="accordion-header" style={darkStyle}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={darkStyle}
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
          style={darkStyle}
        >
          <div className="accordion-body" style={darkStyle}>
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <ul style={{display: "flex",flexDirection: "row-reverse", height: "2rem"}} className="mt-3">
      <li className="darkMode border">
              <div className="form-check form-switch" style={{marginBottom: "0px"}}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckChecked"
                  onChange={handleDarkMode}
                />
                <label className="form-check-label" htmlFor="switchCheckChecked">
                 {darkBtnLabel}
                </label>
              </div>
            </li>
      </ul>
    </div>
  );
}
