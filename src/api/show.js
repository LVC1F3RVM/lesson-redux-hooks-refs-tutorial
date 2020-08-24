import axios from axios;

const getShow = async (id) => {
    try {
        const response = await axios.get(`https://www.api.tvmaze.com/shows/${id}`)
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}