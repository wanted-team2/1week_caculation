import React from 'react'
import { SecondCalculator } from '@components/base'
import styled from '@emotion/styled'

const HomepageBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const HomePage = () => {
  // useEffect(() => {
  //   const { data } = Api({
  //     url: `live?access_key=${process.env.REACT_APP_ACCESS_KEY}`,
  //   })
  //
  //   console.log(data)
  // }, [])

  return (
    <HomepageBlock>
      <SecondCalculator />
    </HomepageBlock>
  )
}

export default HomePage
