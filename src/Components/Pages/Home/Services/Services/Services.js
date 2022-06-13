import React from "react";
import useServices from "../../../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
    const [services] = useServices();

    return (
        <section className="container mx-auto text-center py-20">
            <div className="pb-10">
                <h1 className="text-4xl sm:text-5xl text-secondary font-semibold mb-5 ">ImmiEx Immigration Services</h1>
                <p className="text-lg text-paragraph">Find out what immigration programs you can apply for, sponsor your family and use a representative</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service) => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
