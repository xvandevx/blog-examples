export async function redisGetHandler(Redis, axios, apiPath, path, reset = false) {
    let url = `${apiPath}/${path}`;
    if (!Redis) {
        const {data} = await axios.get(url);
        return data;
    }

    try {
        if (!reset) {
            const cachedData = await Redis.get(path);
            if (cachedData) {
                return JSON.parse(cachedData)
            }
        }   
        const {data} = await axios.get(url);
        if (data) {
            await Redis.set(path, JSON.stringify(data));
        } else {
            await Redis.set(path);
        }
        return data;
    } catch(e) {
        console.log(e)
        const {data} = await axios.get(url);
        return data
    }
}