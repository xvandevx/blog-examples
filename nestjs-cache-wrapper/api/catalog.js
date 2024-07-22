import {redisGetHandler} from "../utils/redis";
import axios from "axios";

export default (config) => ({
    async getItems(Redis = null, reset = false) {
        return await redisGetHandler(Redis, config.API_URL, 'getItems', reset);
    },
    async getItemsWrapper(reset = false) {
        const {data} = await axios.get(`${config.API_WRAPPER_URL}/getItems?reset=${reset}`);
        return data;
    },
});