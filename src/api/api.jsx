import axios from 'axios'
import { API_END_POINT } from '@utils/constants/apiKey'

const Api = ({
  url,
  type = 'GET',
  params,
  contentType = 'application/json',
}) => {
  return axios({
    method: type,
    url: `${API_END_POINT}${url}`,
    data: params,
  })
}

export default Api
