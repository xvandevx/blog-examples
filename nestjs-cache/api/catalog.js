import {redisGetHandler} from "../utils/redis";

export default (config) => ({
    async getItems(Redis = null, reset = false) {
        return await redisGetHandler(Redis, config.API_URL, 'getItems', reset);
    },
});