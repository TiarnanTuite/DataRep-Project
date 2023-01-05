import React from "react";
import "../styles/main.css"

export class Macros extends React.Component {

    //variables for input to be saved into
    constructor(props) {
        super(props);
        this.state = {
            cals: "",
            weight: "",
        };

        //initialize handlesubmit method
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //saving variables entered into local variables
        const { cals, weight } = this.state;
        console.log( cals, weight);

        //1g protein per lbs of weight
        var protein = weight;

        //total cals - 4 cals per gram of protein
        var remainingCals = cals - (weight * 4);

        //25% of total calories goes to fat - 9cals per 1g 
        var fat = (cals / 4) / 9;

        //remainder of calories goes towards carbohydrates
        remainingCals = remainingCals - (fat * 9);
        var carbs = (remainingCals / 4);

        //alert rounded values
        alert("Protein: " + Math.round(protein) + "g\nFat: " + Math.round(fat) + "g\nCarbohydrates: " + Math.round(carbs) + "g");
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>Macronutrient Calculator</h1>
    
            <div className="form">
              <label>Calories</label>
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Calories"
              //stores the input to variable
              onChange={(e)=>this.setState({cals:e.target.value})}/>
            </div>
    
            <div className="form">
              <label>Weight in LBS</label>
              <input type="number" 
              className="form-control" 
              placeholder="       Enter Weight"
              onChange={(e)=>this.setState({weight:e.target.value})}/>
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