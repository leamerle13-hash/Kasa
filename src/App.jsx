import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Footer from "./components/Footer"
import Housing from "./components/Housing"

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route 
                    path="housing/:id"
                    element={<Housing />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}
