import axios from "axios";

const axiosOrder = axios.create({
    baseURL: "https://contacts-7d52e.firebaseio.com/"
});

export default axiosOrder;