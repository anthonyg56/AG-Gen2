import React from "react"
import styled from '@emotion/styled'
import { StaticFooter, DynamicFooter } from './footer-components'
import { FooterProps } from "../../custom-types/footer"

const Container = styled('div')`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: calc(94% - 50px);
`
const Footer: React.FC<FooterProps> = (props) => {
  const { isDynamic, title, index, length, next, previous, setPayload } = props

  const footer = !isDynamic ? 
    <StaticFooter title={title} /> 
  : 
    <DynamicFooter index={index as number} length={length as number} title={title} next={next} previous={previous} setPayload={setPayload}/>

  return (
    <Container className="Footer-Container">
      { footer }
    </Container>
  )
}

export default Footer
