import axios from 'axios'

const getMockData = async () => {
  const { data } = await axios.get('/currencyInfo.json')
  return data
}

export default getMockData
