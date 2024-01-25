import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

function Home() {
  return (
    <>
    <Main/>
    <Row rowId={1} title='Modalidades' fetchURL={requests.requestCategory}/>
    </>
  )
}

export default Home
