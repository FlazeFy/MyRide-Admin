import axios from "axios";

export const getVehicleReadiness = async () => {
    try {
        const res = await axios.get("http://127.0.0.1:8000/api/v1/vehicle/readiness")

        return res.data.data
    } catch (error) {
        throw error.response?.data || { message: "Fetch failed" }
    }
};