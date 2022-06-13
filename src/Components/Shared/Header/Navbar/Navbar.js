import React, { useEffect, useState } from "react";
import Logo from "../../../../Assets/logo-igc.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Utilities/Firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const [hide, setHide] = useState(false);

    const handleMobileMenu = () => {
        setHide(!hide);
    };

    return (
        <section className={`md:flex ${!hide ? "py-0" : "py-5"} md:py-0 items-center relative  md:justify-between lg:container px-10 mx-auto shadow`}>
            <button
                onClick={handleMobileMenu}
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex absolute top-5 right-5 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg bg-gray-100 md:hidden hover:bg-gray-200 "
                aria-controls="mobile-menu"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>

            <Link className={!hide ? "hidden md:block" : "block"} to="/">
                <img className="w-72 mx-auto pl-10" src={Logo} alt="" />
            </Link>

            <nav className={`${!hide ? "hidden md:block" : "block"} `}>
                <ul className="flex md:flex-row flex-col gap-5 lg:gap-10 items-center font-semibold">
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

                    {user ? (
                        <>
                            <li>
                                <NavLink style={({ isActive }) => (isActive ? { color: "red" } : undefined)} to="/profile">
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={() => signOut(auth)} className="bg-primary px-8 py-2 text-white rounded-md">
                                    Logout ({user?.displayName})
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button onClick={() => navigate("/login")} className="bg-primary px-8 py-2 text-white rounded-md">
                                Login
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
