import image from "./IMG_20200926_093609-removebg-preview (4).png";
import "./css/image.css";
const Home=()=>{
    return(
        <>
            <div className="container d-flex flex-row justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="flex-column">
                        <h3>HELLO!</h3>
                        <h1>I AM MUKUL PRASAD</h1>
                        <h2>FULL STACK WEB DEVELOPER</h2>
                        <p>Looking for a position where I can integrate strategies to develop myself</p> 
                        <p>and the organization and also expand my knowledge and company’s production.</p>
                        <div className="d-flex flex-row justify-content-around">
                            <button className="btn btn-info">contact me</button>
                            <button className="btn btn-dark">view resume</button>
                        </div>
                    </div>
                </div>
                <img src={image} alt="profile" className="image"/>
            </div>
        </>
    )
}
export default Home;