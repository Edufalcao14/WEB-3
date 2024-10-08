import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseURL).then((response) => response);
    };

const create = (newObject) => {
    return axios.post(baseURL, newObject).then((response) => response);
    };

const deletePerson = (id, data) => {
        return axios.delete(`${baseURL}/${id}`, { data }).then(response => response.data);
      };

export default { getAll, create, deletePerson };