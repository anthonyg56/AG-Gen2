import React from 'react'
import { NextPage } from 'next'
import Layout from '../../src/components/layout/layout'

const initalPayload = {
  title: 'My Blog',
}

const Blog: NextPage = () => {
  return (
    <Layout payload={initalPayload} headerTitle="Blog">
      <div className="Blog">
        <div>
          <h1>Everthing About Creativity, Web Development, & Freelance</h1>  
          <h2>First Post Coming Soon!</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Blog