import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = async newObject => {
  return axios
    .post(baseUrl, newObject)
    .then(response => response.data)
}

const update = async (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data)
}

const remove = async id => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)
}

export default {
  getAll,
  create,
  update,
  remove,
}
