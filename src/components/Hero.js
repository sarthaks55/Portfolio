import NavBar from "./NavBar"
import { Link } from "react-router-dom"
const Hero = () => {
    return(
        <div className="heroContainer">
            <NavBar/>
            <div className="introHero">
            <div><img className="heroPhoto" src={"/assets/pro.png"} alt="piture" /></div>
            <div className="dataHero">
                <span className="titleContainer">
                    Hi There! 
                </span>
                <div className="heroText">
                <h2>I'M</h2>
                <h2>Sarthak Sambare</h2>
                <p>Welcome! I am an I.T. Engineering Student.I am looking for new challenges to become an excellent professional.I hope you enjoy my work! </p>
                </div>
                <Link  to='/contacto' onClick={() => window.scrollTo(0, 0)} className="contactSpan" >
                    <p className="contactHero">{"< Contact Me! />"}</p>
                </Link> 
            </div>
            </div>
        </div>
    )
}

export default Hero