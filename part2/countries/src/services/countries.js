import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = async () => {
  return axios
    .get(`${baseUrl}/all`)
    .then(response => response.data)
}

const getByName = async country => {
  return axios
    .get(`${baseUrl}/name/${country}`)
    .then(response => response.data)
}

export default {
  getAll,
  getByName,
}
