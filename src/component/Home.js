import image from "./IMG_20200926_093609-removebg-preview (4).png";
import "./css/image.css";
const Home=()=>{
    return(
        <>
            <div className="container d-flex flex-row justify-content-between mt-2">
                <div className="d-flex align-items-center">
                    <div className="card">
                        <div className="card-body flex-column">
                            <h3 className="hello">HELLO!</h3>
                            <h1>I AM MUKUL PRASAD</h1>
                            <h2 className="stack">FULL STACK WEB DEVELOPER</h2>
                            <div className="d-flex flex-row justify-content-around">
                                <button className="btn1 btn">contact me</button>
                                <button className="btn btn-dark">view resume</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={image} alt="profile" className="image"/>
            </div>
        </>
    )
}
export default Home;