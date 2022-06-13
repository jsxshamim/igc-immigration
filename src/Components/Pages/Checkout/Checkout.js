import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import auth from "../../../Utilities/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { HeaderFormContext } from "../../../App";

const Checkout = () => {
    const { bookingID } = useParams();
    const [services] = useServices();
    const service = services.find((service) => service.id === bookingID);

    const [user] = useAuthState(auth);

    const [headerInfo] = useContext(HeaderFormContext);
    console.log(headerInfo);
    return (
        <section className="container px-auto grid grid-cols-2 py-10 gap-14 justify-between">
            <div>
                <div className=" items-center justify-between pb-5 mb-5 border-b">
                    <h1 className="text-4xl font-bold text-secondary mb-3">{service?.title}</h1>
                    <h3 className="text-xl font-semibold ">Starting from ${service?.price}</h3>
                </div>
                <img className="float-left w-4/6 pr-5" src={service?.picture} alt="" />
                {service?.description.split(/\n/).map((paragraph) => (
                    <p className="text-lg text-justify">
                        {paragraph} <br /> <br />
                    </p>
                ))}
            </div>
            <div>
                <h2 className="text-4xl font-bold text-secondary">Request Free Consultation</h2>
                <form className="flex flex-col pt-14 gap-5 text-paragraph">
                    <input className="border px-5 py-3 placeholder:text-paragraph" type="text" name="name" defaultValue={user.displayName} id="name" placeholder="Enter Your Name" />
                    <input className="border px-5 py-3 placeholder:text-paragraph" type="email" name="email" defaultValue={user.email} id="email" placeholder="Enter Your Email" />
                    <input className="border px-5 py-3 placeholder:text-paragraph" type="tel" name="number" defaultValue={headerInfo?.phone} id="number" placeholder="Enter Your Mobile Number" />
                    <select className="w-full px-5 py-3 text-paragraph border" name="visaType" id="visaType">
                        <option defaultValue="Visa Type">Select Your Service</option>
                        {services.map((service) => (
                            <option value={service?.title}>{service?.title}</option>
                        ))}
                    </select>
                    <textarea className="border px-5 py-3 placeholder:text-paragraph" name="message" id="message" rows="5" placeholder="Your Message"></textarea>
                    <button className="bg-primary px-8 py-3 text-lg font-semibold text-white">Checkout</button>
                </form>
            </div>
        </section>
    );
};

export default Checkout;
