import React, { useState } from 'react'
import { NextPage } from 'next'
import { FooterProps } from '../src/custom-types/footer'
import Layout from '../src/components/layout/layout'
import HomeData from '../src/components/home'

type InitalState = {
   component: () => JSX.Element,
   payload: FooterProps
}

const IndexPage: NextPage =() => {
  const [displayData, setDisplayData] = useState<InitalState>(HomeData[0])

  const payload = displayData.payload
  const component = <displayData.component />

  return (
    <Layout payload={payload} setPayload={i => setDisplayData(HomeData[i])} headerTitle="Home" id='Landing' >
      { component }
    </Layout>
  )
}

export default IndexPage