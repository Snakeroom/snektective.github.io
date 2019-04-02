import axios from 'axios'

export function getData() {
  return axios
    .get(`https://api.myjson.com/bins/obxx6.json`)
    .then(res => res.data)
}
