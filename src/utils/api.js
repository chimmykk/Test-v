import axios from "axios";

const stripeAppKey = "3154fdeaf6bc8df5326f8303d869ad2d90a17f1a891afed2e929803ef566fbfedb5cd6e7521601c68c7b0b545ed8ec2e18527598adb5af24a26052cfa2284c481fe8541793d14889dbba09017f4cdb852c8f419732879c0ad6aa18c6d799f4ca5deb1469cc85ce78f28d9ddbea1a19eb92a2b30944a58c9fa34cc21389916f26";
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
