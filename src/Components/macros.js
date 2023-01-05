import React from "react";
import "../styles/main.css"

export class Macros extends React.Component {
    render() {
        return (
            <form>
            <h1>Macronutrient Calculator</h1>
    
            <div className="form">
              <label>Calories</label>
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Calories"/>
            </div>
    
            <div className="form">
              <label>Weight in LBS</label>
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Weight"/>
            </div>
    
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p>
              Dont know your calories? Get them <a href="/calories">Here!</a>
            </p>
          </form>
        );
    }
}

export default Macros;