import {BrowserRouter ,Route,Routes} from "react-router-dom";
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Eight/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;