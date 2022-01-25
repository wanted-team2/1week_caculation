import axios from 'axios'
import { API_END_POINT, API_ACCESS_KEY } from '@utils/constants/apiKey'

const getCurrencyApi = async () => {
  const { data } = await axios.get(
    `${API_END_POINT}live?access_key=${API_ACCESS_KEY}`,
  )
  return data
}

export default getCurrencyApi
