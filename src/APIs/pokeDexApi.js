import axios from 'axios';

/* objeto axios general para realizacion de llamadas. */

/* Para una mayor seguridad, se puede instanciar la baseURL desde archivo.env */
const PokedexApi = axios.create({
    baseURL : "https://pokeapi.co/api/v2/"
});

// Configuración de interceptores

PokedexApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
    }

    return config;
});

export default PokedexApi;