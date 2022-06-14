import React from 'react'

import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestPopular} />
      
      <Row rowID='3' title='Up Coming' fetchURL={requests.requestPopular} />
      <Row rowID='4' title='Up Coming' fetchURL={requests.requestPopular} />
      <Row rowID='5' title='Up Coming' fetchURL={requests.requestPopular} />
    </div>
  )
}

export default Home