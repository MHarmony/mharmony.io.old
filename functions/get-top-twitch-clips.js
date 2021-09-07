const axios = require('axios');

DEFAULT_HEADERS = {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': process.env.TWITCH_CLIENT_ID
};

API_URL = 'https://api.twitch.tv/kraken/clips/top';

exports.handler = async function (event) {
    let params = {
        period: event.queryStringParameters.period || 'week',
        language: event.queryStringParameters.language || 'en',
        cursor: event.queryStringParameters.start || '0'
    };

    if (event.queryStringParameters.channel) {
        params.channel = channel;
    }
    if (event.queryStringParameters.game) {
        params.game = game;
    }

    try {
        const res = await axios.get(API_URL, {
            params: params,
            headers: DEFAULT_HEADERS
        });

        const clips = res.data.clips;

        return {
            statusCode: 200,
            body: JSON.stringify({ clips })
        };
    } catch (err) {
        console.error(err);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetched top clips data.' })
        };
    }
};
