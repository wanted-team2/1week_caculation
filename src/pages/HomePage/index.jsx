import React, { useEffect, useState } from 'react'
import Api from '@api'

const HomePage = () => {
  const [state, setState] = useState({})

  useEffect(async () => {
    try {
      const { data } = await Api({
        url: `live?access_key=${process.env.REACT_APP_ACCESS_KEY}`,
      })
      const philippines = data.quotes.USDPHP
      const japan = data.quotes.USDJPY
      const korea = data.quotes.USDKRW
      setState({
        '한국(KRW)': korea,
        '필리핀(PHP)': philippines,
        '일본(JPY)': japan,
      })
    } catch (error) {
      throw new Error('API 에러')
    }
  }, [])

  return (
    <>
      <h1>환율 계산</h1>
      <form action="">
        <strong>송금국가</strong>
        <span>미국(USD)</span>
        <strong>수취국가</strong>
        <select name="" id="">
          <option value="한국(KRW)">한국(KRW)</option>
          <option value="필리핀(PHP)">필리핀(PHP)</option>
          <option value="일본(JPY)">일본(JPY)</option>
        </select>
        <strong>환율</strong>
        <span></span>
        <strong>송금액</strong>
        <input type="number" />
        USD
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default HomePage
