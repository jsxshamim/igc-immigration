import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Login from "./Components/Pages/User/Login/Login";
import Signup from "./Components/Pages/User/Signup/Signup";
import Header from "./Components/Shared/Header/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Checkout from "./Components/Pages/Checkout/Checkout";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />

                <Route path="/checkout" element={<Checkout />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
