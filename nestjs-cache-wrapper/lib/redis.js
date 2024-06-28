import Redis from 'ioredis'

const options = {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
    maxRetriesPerRequest: 0,
};
const client = new Redis(options);

client.on('error', error => {
    if (error.code === 'ECONNRESET') {
        console.log('Connection to Redis Session Store timed out.');
    } else if (error.code === 'ECONNREFUSED') {
        console.log('Connection to Redis Session Store refused!');
    } else {
        console.log(error);
    }
});

client.on('reconnecting', err => {
    if (client.status === 'reconnecting') {
        console.log('Reconnecting to Redis Session Store...');
    } else { 
        console.log('Error reconnecting to Redis Session Store.');
    }
});

client.on('connect', err => {
    if (!err) {
        console.log('Connected to Redis Session Store!');
    }
});

export default client