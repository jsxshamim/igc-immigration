import React from "react";
import Logo from "../../../../Assets/logo-igc.png";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <section className="flex items-center justify-between container mx-auto shadow">
            <div className="logo">
                <Link to="/">
                    <img className="w-60" src={Logo} alt="" />
                </Link>
            </div>
            <nav>
                <ul className="flex gap-10 items-center font-semibold">
                    <li>
                        <NavLink style={({ isActive }) => (isActive ? { color: "red" } : undefined)} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => (isActive ? { color: "red" } : undefined)} to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => (isActive ? { color: "red" } : undefined)} to="/blog">
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => (isActive ? { color: "red" } : undefined)} to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => (isActive ? { color: "red" } : undefined)} to="/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={() => navigate("/login")} className="bg-primary px-8 py-2 text-white rounded-md">
                            Login
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
