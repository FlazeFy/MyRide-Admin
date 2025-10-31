import axios from "axios";

export const getVehicleReadiness = async () => {
    try {
        const res = await axios.get(
            "http://127.0.0.1:8000/api/v1/vehicle/readiness",
            {
                headers: {
                  Authorization: `Bearer 449|6Cv5tBFb7ZEhCztTT8WlIr9HSPDM0eJhTvwrDxwV8de58644`
                }
            }
        )

        return res.data.data
    } catch (error) {
        throw error.response?.data || { message: "Fetch failed" }
    }
};