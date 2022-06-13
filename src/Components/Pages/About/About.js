import React from "react";
import about from "../../../Assets/about/about1.png";

const About = () => {
    return (
        <section className="container mx-auto grid grid-cols-2 gap-10 items-center py-20">
            <img className="w-9/12" src={about} alt="" />
            <div>
                <h2 className="text-3xl font-bold text-secondary mb-5">All About me and my goal</h2>
                <p className="text-lg text-paragraph">
                    The goal is the same, and that is to become a good programmer. I like coding and it's fun. I have been learning based on this willpower. God willing, I will be able to reach the goal soon. I love learning something new, something
                    unknown. I was stubborn at work from the beginning. I work until I get my best output. I like to eat and walk around as well as learn something new. My short-term goal is to be part of a company where I can use my knowledge and
                    skills to upgrade myself as well as work for the company. My main goal is to become a higher role in my career like a Software Engineer, Frontend developer.
                </p>
            </div>
        </section>
    );
};

export default About;
