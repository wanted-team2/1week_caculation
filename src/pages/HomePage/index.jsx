import React, { useEffect } from 'react'
import Api from '@api'

const HomePage = () => {
  useEffect(() => {
    const { data } = Api({
      url: `live?access_key=${process.env.REACT_APP_ACCESS_KEY}`,
    })

    console.log(data)
  }, [])

  return <></>
}

export default HomePage
