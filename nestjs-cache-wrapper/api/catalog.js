import {redisGetHandler} from "../utils/redis";

export default (axios, config) => ({
    async getItems(Redis = null, reset = false) {
        return await redisGetHandler(Redis, axios, config.API_URL, 'getItems', reset);
    },
    async getItemsWrapper(reset = false) {
        const {data} = await axios.get(`${config.API_WRAPPER_URL}/getItems?reset=${reset}`);
        return data;
    },
});