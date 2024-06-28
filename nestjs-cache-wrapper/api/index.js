import axios from "axios";
import catalog from "./catalog";

const config = {
    API_URL: 'http://localhost:3000/api/catalog',
    API_WRAPPER_URL: 'http://localhost:3000/api/apiWrapper',
}

export const Api = {
    catalog: catalog(axios, config),
}