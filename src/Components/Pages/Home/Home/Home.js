import React from "react";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import Services from "../Services/Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Home;
