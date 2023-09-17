import axios from "axios";

export const fetchDataFromApi = async (url) => {
    // Check if the Stripe app key is defined
    if (!process.env.REACT_APP_STRIPE_APP_KEY) {
        throw new Error('Stripe app key not provided.');
    }

    const params = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
        },
    };

    try {
        const response = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Request failed with status ${error.response.status}`);
        } else if (error.request) {
            // The request was made but check if response is 404
            throw new Error('No response received from the server.');
        } else {
            // Something happened in setting up the request or handling the response
            throw new Error('Error setting up the request or handling the response.');
        }
    }
};
