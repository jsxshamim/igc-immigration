import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderTop = () => {
    return (
        <div className="flex text-paragraph justify-between text-md items-center h-10 border-b container mx-auto">
            <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 121 King St, Melbourne, Victoria 3000
            </div>
            <div className="flex flex-row">
                <span className="border-r pr-5">
                    <FontAwesomeIcon icon={faPhoneFlip} /> +61-2 3456 7890, +61-2 7890 3456
                </span>
                <span className="pl-5">
                    <FontAwesomeIcon icon={faEnvelope} /> hello@domain.com
                </span>
            </div>
        </div>
    );
};

export default HeaderTop;
