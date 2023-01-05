import React from "react";
import "../styles/main.css"

export class Calories extends React.Component {
    render() {
        return (
            <form>
            <h1>Calorie Calculator</h1>
    
            <div className="form">
              <label>Enter Height</label>
              <input type="number" 
              className="form-control" 
              placeholder="       Enter height in CM"/>
            </div>
    
            <div className="form">
              <label>Enter weight</label>
              <input type="password" 
              className="form-control" 
              placeholder="       Enter Weight in LBS"/>
            </div>

            <div className="form">
              <label>Enter Age</label>
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Age in years"/>
            </div>

            <div className="form">
              <label>Enter Gender</label>
              <input type="text" 
              className="form-control" 
              placeholder="       Enter 'Male' or 'Female'"/>
            </div>

            <div className="form">
              <label>Enter Activity level 1-5</label>
              <input type="number" 
              className="form-control" 
              placeholder="       1 being inactive  - 5 very active "/>
            </div>
    
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p>
              Get your Macronutrients <a href="/macros">Here!</a>
            </p>
          </form>
        );
    }
}

export default Calories;