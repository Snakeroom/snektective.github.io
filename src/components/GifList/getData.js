import axios from 'axios'

export function getData() {
  return axios.get(`https://snake.egg.party/v1/targets`).then(res => res.data)
}
