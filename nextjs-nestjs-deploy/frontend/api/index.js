import catalog from "./catalog";

const config = {
    API_URL: typeof window !== "undefined" ? '/api' : 'http://localhost/api',
}

export const Api = {
    catalog: catalog(config),
}