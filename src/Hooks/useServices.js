import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get("services.json")
            .then((res) => setServices(res.data))
            .catch((error) => console.log(error.message));
    }, []);

    return [services, setServices];
};

export default useServices;
