import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter,Route} from "react-router-dom";
const Router =()=>{
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Route path="/" component={Home}/> 
            </BrowserRouter>
        </div>
    )
}
export default Router;