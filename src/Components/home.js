import React from "react";
import "../styles/main.css"

export class Home extends React.Component {

    //variables for input to be saved into
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        };
    }

    componentDidMount(){
        //using fetch get the /register api from the server and post the variables in json format
        fetch("http://localhost:5000/home", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
            token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                //verify in console
                console.log(data, "userData");
                this.setState({ userData: data.data });
            });
    }
    
    render() {
        return (
            //{ this.state.userData.fname } to use the saved data
            <div>
                <h1>Welcome to TrackYourMacs!</h1>
                <hr></hr>
                <br></br>
                <h3>Here at TrackYourMacs, We allow you to gather all the information needed to begin your weight loss journey!</h3>
            </div>
        );
    }
}

export default Home;