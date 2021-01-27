import { Link } from "react-router-dom"
import "./css/image.css"

const Navbar =()=>{
    return(
        <div className="navbar d-flex flex-row py-2 justify-content-between">
            <h4 className="logo">MUKUL PRASAD</h4>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-row justify-content-between">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </div>
            </div>
            <button className="btn1 btn">contact me</button>
        </div>
    )
}
export default Navbar;