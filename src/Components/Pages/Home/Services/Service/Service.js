import React from "react";

const Service = ({ service }) => {
    const { title, description, picture, price } = service;

    return (
        <div className="border ">
            <div className="overflow-hidden">
                <img className="h-52 w-full object-cover hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={picture} alt="" />
            </div>
            <div className="text-left py-5 px-5">
                <h1 className="text-2xl font-semibold text-secondary">{title}</h1>
                <p className="text-paragraph my-3">{description.split(" ").slice(0, 14).join(" ")}...</p>
                <p className="text-xl font-semibold mb-5">Starting from ${price}</p>
                <button className="bg-primary px-5 py-3 text-white font-bold">Booking Now</button>
            </div>
        </div>
    );
};

export default Service;
