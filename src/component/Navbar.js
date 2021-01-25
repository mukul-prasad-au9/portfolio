import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
        <div className="d-flex flex-row py-2" style={{height:"20%",backgroundColor:"grey"}}>
            <h4 className="">MUKUL PRASAD</h4>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-row justify-content-between">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </div>
            </div>
        </div>
    )
}
export default Navbar;