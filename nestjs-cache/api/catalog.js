import {redisGetHandler} from "../utils/redis";

export default (axios, config) => ({
    async getItems(Redis = null, reset = false) {
        return await redisGetHandler(Redis, axios, config.API_URL, 'getItems', reset);
    },
});