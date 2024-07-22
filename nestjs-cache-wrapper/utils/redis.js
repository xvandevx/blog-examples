import axios from "axios";

export async function redisGetHandler(Redis, apiPath, apiCode, reset = false) {
    const url = `${apiPath}/${apiCode}`;
    if (!Redis) {
        return await fetchData(url);
    }

    try {
        if (!reset) {
            const cachedData = await Redis.get(apiCode);
            if (cachedData) {
                return JSON.parse(cachedData)
            }
        }
        const serverData = await fetchData(url);
        if (serverData) {
            Redis.set(apiCode, JSON.stringify(serverData));
        }
        return serverData;
    } catch(e) {
        console.log(e)
    }
    return await fetchData(url);
}

async function fetchData(url) {
    try {
        const {data} = await axios.get(url);
        return data
    } catch (e) {
        console.log(e)
    }
    return null;
}