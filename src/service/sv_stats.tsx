import axios from "axios";

export const getSummaryApps = async () => {
    try {
        const res = await axios.get("http://127.0.0.1:8000/api/v1/stats/summary")

        return res.data.data
    } catch (error) {
        throw error.response?.data || { message: "Fetch failed" }
    }
};

export const getTotalTripMonthly = async (year:number) => {
    try {
        const res = await axios.get(
            `http://127.0.0.1:8000/api/v1/stats/total/trip/monthly/${year}`
        )

        return res.data.data
    } catch (error) {
        throw error.response?.data || { message: "Fetch failed" }
    }
};

export const getTotalFuelMonthly = async (year:number,context:string) => {
    try {
        const res = await axios.get(
            `http://127.0.0.1:8000/api/v1/stats/total/fuel/monthly/${context}/${year}`
        )

        return res.data.data
    } catch (error) {
        throw error.response?.data || { message: "Fetch failed" }
    }
};

export const getTotalServiceMonthly = async (year:number,context:string) => {
    try {
        const res = await axios.get(
            `http://127.0.0.1:8000/api/v1/stats/total/service/monthly/${context}/${year}`
        )

        return res.data.data
    } catch (error) {
        throw error.response?.data || { message: "Fetch failed" }
    }
};