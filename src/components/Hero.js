import NavBar from "./NavBar"
import { Link } from "react-router-dom"
const Hero = () => {
    return(
        <div className="heroContainer">
            <NavBar/>
            {/* <div className="fireflies">
                <img className="img" src="/assets/icons/c.png" alt="ico"/>
                <img className="img" src="/assets/icons/c++.png" alt="ico"/>
                <img className="img" src="/assets/icons/cloud.png" alt="ico"/>
                <img className="img" src="/assets/icons/internet.png" alt="ico"/>
                <img className="img" src="/assets/icons/language.png" alt="ico"/>
                <img className="img" src="/assets/icons/python.png" alt="ico"/>
                <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>
            </div> */}
            <div className="introHero">
            <div className="gooey"><img className="heroPhoto" src={"/assets/pro.png"} alt="piture" /></div>
            <div className="dataHero">
                <span className="titleContainer">
                    <h3 className="h11">Hi There! </h3>
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