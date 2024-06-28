export async function redisGetHandler(Redis, axios, apiPath, path, reset = false) {
    let url = `${apiPath}/${path}`;
    if (!Redis) {
        const {data} = await axios.get(url);
        return data;
    }

    try {
        const [redisKey, ...keyArray] = path.split('/').filter(item => !!item)
        const key = keyArray.join('/');
        if (!reset) {
            const cachedData = await Redis.hget('Api_' + redisKey, key);
            if (cachedData) {
                return JSON.parse(cachedData)
            }
        }   
        const {data} = await axios.get(url);
        if (data) {
            await Redis.hset('Api_' + redisKey, key, JSON.stringify(data));
        } else {
            await Redis.hdel('Api_' + redisKey, key);
        }
        return data;
    } catch(e) {
        console.log(e)
        const {data} = await axios.get(url);
        return data
    }
}