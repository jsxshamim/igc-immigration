import React from "react";
import "./HeaderBanner.css";
import HeaderForm from "./HeaderForm";

const HeaderBanner = () => {
    return (
        <section className="header-banner text-white">
            <div className="md:w-4/6 mx-auto py-24 px-5">
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-8">Start Planning Your New Dream</h3>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Travel and Immigrate with IGC</h1>
                    <p className="text-lg mb-8 font-thin">
                        The massive migrant caravan, which at one point swelled up to well over 10,000 migrants as it set off toward the U.S. border from southern Mexico, has now broken up as Mexican officials have offered temporary visas to migrants
                        - although organizers say they will still travel to the U.S.
                    </p>
                </div>
                <div className="request-form bg-black/30 p-10 pb-14 rounded-md">
                    <HeaderForm />
                </div>
                <div className="hero-links"></div>
            </div>
        </section>
    );
};

export default HeaderBanner;
