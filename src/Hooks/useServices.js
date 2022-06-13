import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.npoint.io/24e123518336b2e04f76")
            .then((res) => setServices(res.data))
            .catch((error) => console.log(error.message));
    }, []);

    return [services, setServices];
};

export default useServices;
