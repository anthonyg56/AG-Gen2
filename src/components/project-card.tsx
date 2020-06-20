import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { CardsProps } from '../custom-types/projects'


const Container = styled('div')`
  width: 100%;
  height: 100%;

  img {
    height: auto;
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
    box-shadow: -10px 0 13px -7px #000, 10px 0 13px -7px #000, 5px 5px 15px 5px transparent;
  }
`

const Card: React.FC<CardsProps> = props => {
  const { banner, slug, title } = props
  const router = useRouter()

  const id = title.split(' ').join('-')

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    router.push(`/projects/${slug}`)
  }

  return (
    <Container className="Projects-Card" id={id} onClick={e => handleClick(e)}>
        <img src={banner} alt="banner" />
        <h4>{ title }</h4>
    </Container>
  )
}

export default Card