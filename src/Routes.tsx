import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato/Contato"
import Home from "./pages/Home/Home"


const MappedRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/portfolio/" element={<Home/>} />
                <Route path="/contato" element={<Contato/>} />
            </Routes>
        </Router>
    )
}

export default MappedRoutes

