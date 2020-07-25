import axios from 'axios';

export class ProjectService {

    getProjectsSmall() {
        return axios.get('data/projects-small.json')
            .then(res => res.data.data);
    }

    getProjectsMedium() {
        return axios.get('data/projects-medium.json')
            .then(res => res.data.data);
    }

    getProjectsLarge() {
        return axios.get('data/projects-large.json')
            .then(res => res.data.data);
    }
}