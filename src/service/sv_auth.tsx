import axios from "axios";

export const postLogin = async (username: string, password: string) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/v1/login", {
            username, password,
        });
        
        return response.data
    } catch (error: any) {
        throw error.response?.data || { message: "Login failed" }
    }
};