import Redis from '/lib/redis'
import {Api} from "../../../api";

export default async function handler(req, res) {
    const data = await Api.catalog.getItems(Redis, req.query.reset === 'true');
    res.status(200).json(data)
}