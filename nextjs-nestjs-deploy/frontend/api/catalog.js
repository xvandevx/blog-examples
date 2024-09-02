import axios from "axios";

export default (config) => ({
    async getItems() {
        try {
            const {data} = await axios.get(`${config.API_URL}/catalog`);
            return data;
        } catch (e) {
            console.error(e);
        }
        return null;
    },
});