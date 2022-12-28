import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/home.css"

function Navbar(){
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3>TrackYourMacs</h3>
            
            <nav ref={navRef}>
                <a href="/home">Home</a>
                <a href="/calories">Calories</a>
                <a href="/macros">Macronutrients</a>
                <a href="/sign-up">Sign Up!</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;