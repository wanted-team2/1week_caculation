import axios from 'axios'
const SERVER_URL = process.env.REACT_APP_API_END_POINT

const Api = ({
  url,
  type = 'GET',
  params,
  contentType = 'application/json',
}) => {
  return axios({
    method: type,
    url: `${SERVER_URL}${url}`,
    data: params,
  })
}

export default Api
