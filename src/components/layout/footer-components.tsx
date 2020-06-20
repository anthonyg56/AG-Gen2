import { DynamicFooterProps, StaticFooterProps } from "../../custom-types/footer"
import styled from '@emotion/styled'
import Link from "next/link"

const DynamicContainer = styled('div')`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  color: white;
  
  .Index {
    text-align: left;
  }

  .Pagnation {
    text-align: center;
    width: 100%;
  }

  .Pagnation-Cra {
    display: inline-block;
    margin: auto 15px
  }

  .Title {
    text-align: right;
  }
`

const DynamicFooter: React.FC<DynamicFooterProps> = props => {
  const { index, length, title, next, previous, setPayload } = props
  var nextLink
  var prevLink

  if (!setPayload) {
    nextLink = next ? <Link href={`${next.url}`}>{next.title}</Link> : null
    prevLink = previous ? <Link href={`${previous.url}`}>{previous.title}</Link> : null
  } 

  nextLink = next ? (
    <div className="Pagnation-Cra" id="next" onClick={e => handleClick(e, index)}>
      <h4>Next</h4>
    </div>
  ) : null
  prevLink = previous ? (
    <div className="Pagnation-Cra" id="previous" onClick={e => handleClick(e, (index - 2))}>
      <h4>Previous</h4>
    </div>
  ) : null

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    event.preventDefault
    setPayload ? setPayload(index) : null
  }

  const footer = (
    <DynamicContainer className="Dynamic-Footer Footer">
      <div className="Index">
        <h4>
          {index} / {length}
        </h4>
      </div>
      <div className="Pagnation">
        {prevLink}
        {nextLink}
      </div>
      <div className="Title">
        <h4>{title}</h4>
      </div>
   </DynamicContainer>
  )

  return footer
}

const StaticFooter: React.FC<StaticFooterProps> = props => {
  const { title } = props

  const footer = (
      <div className="Static-Footer Footer">
        <div className="Title">
          <h4>{title}</h4>
        </div>
      </div>
  )
  return footer
}

export {
  DynamicFooter,
  StaticFooter
}