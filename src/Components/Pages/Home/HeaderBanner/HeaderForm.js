import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderFormContext } from "../../../../App";
import useServices from "../../../../Hooks/useServices";

const HeaderForm = () => {
    const [info, setInfo] = useContext(HeaderFormContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const phone = e.target.phone.value;
        const visaType = e.target.visaType.value;

        setInfo({ displayName, phone, visaType });

        navigate(`/checkout/${visaType}`);
    };

    const [services] = useServices();

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <label className="flex flex-col" htmlFor="name">
                <span>
                    Name <span>*</span>
                </span>
                <input className="w-full p-3 rounded-md text-paragraph mt-2" type="text" name="name" id="name" placeholder="Enter Your Name" />
            </label>

            <label className="flex flex-col" htmlFor="email">
                <span>
                    Phone <span>*</span>
                </span>
                <input className="w-full p-3 rounded-md text-paragraph mt-2" type="tel" name="phone" id="phone" placeholder="Your Phone Number" />
            </label>
            <label className="flex flex-col" htmlFor="visaType">
                <span>Select Visa Type</span>
                <select className="w-full p-3 rounded-md text-paragraph mt-2" name="visaType" id="visaType">
                    <option defaultValue="Visa Type">Visa Type</option>
                    {services.map((service) => (
                        <option key={service?.id} value={service?.id}>
                            {service?.title}
                        </option>
                    ))}
                </select>
            </label>
            <label className="flex flex-col justify-end" htmlFor="submit">
                <button className="w-full p-3 rounded-md bg-primary " type="submit">
                    Send Request
                </button>
            </label>
        </form>
    );
};

export default HeaderForm;
