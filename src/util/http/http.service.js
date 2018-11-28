import axios from 'axios';
import { resources } from '../../conf'

export class HttpService {
    endpoint;

    http = axios.create({
        baseURL: `${resources.host.url}:${resources.host.port}`,
        headers: {
            Authorization: 'Bearer {token}'
        }
    })

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    get() {
        return this.http.get(`${this.endpoint}`)
            .then(response => response.data)
            .catch(error => {throw error})
    }
}
