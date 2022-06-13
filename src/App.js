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
import ForgotPassword from "./Components/Pages/User/ForgotPassword/ForgotPassword";
import RequireAuth from "./Components/Shared/RequireAuth/RequireAuth";
import Profile from "./Components/Pages/Profile/Profile";
import { createContext, useState } from "react";

export const HeaderFormContext = createContext([]);

function App() {
    const [info, setInfo] = useState({});

    return (
        <HeaderFormContext.Provider value={[info, setInfo]}>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                <Route
                    path="/checkout/:bookingID"
                    element={
                        <RequireAuth>
                            <Checkout />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <RequireAuth>
                            <Profile />
                        </RequireAuth>
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </HeaderFormContext.Provider>
    );
}

export default App;
