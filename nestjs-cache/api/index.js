import axios from "axios";
import catalog from "./catalog";

const config = {
    API_URL: 'http://localhost:3000/api/catalog',
}

export const Api = {
    catalog: catalog(axios, config),
}