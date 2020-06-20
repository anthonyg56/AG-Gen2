import React from 'react'
import styled from '@emotion/styled'
import { GetStaticProps, NextPage } from 'next'
import Card from '../../src/components/project-card'
import Layout from '../../src/components/layout/layout'
import { getMetadata } from '../../src/utils/withContent'
import ProjectsMetadata from '../../src/metadata/projects'
import { ProjectsMetadata as ProjectsMetadataT } from '../../src/custom-types/projects'

const Container = styled('div')`
  text-align: center;

  .Title {
    padding: 40px 0 15px 0;
  }

  .Title h2 {
    color: white;
    font-size: 3.5em;
    letter-spacing: 1px;
  }

  .Cards-Container {
    padding: 0 350px;
  }
`

const initalPayload = {
  title: 'My Projects',
}

const Projects: NextPage<{ metadata: Array<ProjectsMetadataT> }> = props => {
  const { metadata } = props
  const cards = metadata.map((post, index) => <Card banner={post.banner} slug={post.slug} title={post.title} key={index}/>)

  return (
    <Layout payload={initalPayload} headerTitle="Projects">
      <Container className="Projects">
        <div className="Title">
          <h2>My Projects</h2>
        </div>
        <div className="Cards-Container">
          { cards }  
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const metadata = await getMetadata(ProjectsMetadata)

  return {
    props: {
      metadata
    }
  }
}

export default Projects