import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
        <div className="d-flex flex-row">
            <h4 className="col-2">MUKUL</h4>
            <div className="d-flex justify-content-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/works">Works</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
    )
}
export default Navbar;