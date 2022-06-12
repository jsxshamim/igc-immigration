import React from "react";
import "./HeaderBanner.css";

const HeaderBanner = () => {
    return (
        <section className="header-banner text-white">
            <div className="w-4/6 mx-auto py-24">
                <div className="text-center">
                    <h3 className="text-3xl font-semibold mb-8">Start Planning Your New Dream</h3>
                    <h1 className="text-6xl font-bold mb-8">Travel and Immigrate with IGC</h1>
                    <p className="text-lg mb-8 font-thin">
                        The massive migrant caravan, which at one point swelled up to well over 10,000 migrants as it set off toward the U.S. border from southern Mexico, has now broken up as Mexican officials have offered temporary visas to migrants
                        - although organizers say they will still travel to the U.S.
                    </p>
                </div>
                <div className="request-form bg-black/30 p-10 pb-14 rounded-md">
                    <form className="grid grid-cols-4 gap-5">
                        <label className="flex flex-col" htmlFor="name">
                            <span>
                                Name <span>*</span>
                            </span>
                            <input className="w-full p-3 rounded-md text-paragraph mt-2" type="text" name="name" id="name" placeholder="Enter Your Name" />
                        </label>

                        <label className="flex flex-col" htmlFor="email">
                            <span>
                                Email <span>*</span>
                            </span>
                            <input className="w-full p-3 rounded-md text-paragraph mt-2" type="email" name="email" id="email" placeholder="Enter Your Email" />
                        </label>
                        <label className="flex flex-col" htmlFor="visaType">
                            <span>Select Visa Type</span>
                            <select className="w-full p-3 rounded-md text-paragraph mt-2" name="visaType" id="visaType">
                                <option defaultValue="Visa Type">Visa Type</option>
                                <option value="Travel Visa">Travel Visa</option>
                                <option value="Business Visa">Business Visa</option>
                                <option value="Student Visa">Student Visa</option>
                                <option value="Working Visa">Working Visa</option>
                                <option value="PR Visa">PR Visa</option>
                                <option value="Family Visa">Family Visa</option>
                            </select>
                        </label>
                        <label className="flex flex-col justify-end" htmlFor="submit">
                            <button className="w-full p-3 rounded-md bg-primary " type="submit">
                                Send Request
                            </button>
                        </label>
                    </form>
                </div>
                <div className="hero-links"></div>
            </div>
        </section>
    );
};

export default HeaderBanner;
