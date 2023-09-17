import axios from "axios";

const stripeAppKey = "746522e8ae5cfa5f10f76ae479ce82548331039fb5f53dc07113a84c1e4b89504f1d16d8e4dd7c2b117b38c3d8c66df043307b2117cd5b809730d2a71211b2b7b28c11615ff94fa8d7a69348eec02fd37b74dad6bec14264b859d70d2ca139d83456e4309202a71ec8d2e93ffd4fa5d9adb723494098bf1665d6a9d7bffc4f77";
const devUrl = "https://testingaa.onrender.com";

const params = {
    headers: {
        Authorization: `Bearer ${stripeAppKey}`,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(devUrl + url, params);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}
