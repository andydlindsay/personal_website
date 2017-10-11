import axios from 'axios';

export const FETCH_PROJECTS = 'fetch_projects';
export const CREATE_MESSAGE = 'create_message';

const ROOT_URL = 'http://localhost:3090/api';

export function fetchProjects() {
    const itemsPerPage = 6;
    const currentPage = 1;
    const featured = 'true';
    const url = `${ROOT_URL}/projects/?itemsperpage=${itemsPerPage}&currentpage=${currentPage}&featured=${featured}`;
    const request = axios.get(url);
    return {
        type: FETCH_PROJECTS,
        payload: request
    }
}

export function createMessage(values, callback) {
    const url = `${ROOT_URL}/messages/new`;
    const request = axios.post(url, values)
        .then(() => callback());
    return {
        type: CREATE_MESSAGE,
        payload: request
    }
}
