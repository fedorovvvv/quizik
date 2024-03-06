import Heading from '@shared/ui/Heading'
import styled from 'styled-components'

type Props = {
  title: string
  description?: string
}

const QuestionStyledComponent = styled.div`
  p {
    margin-top: 8px;
    font-size: 16px;
  }
`

export default function Question({ title, description }: Props) {
  return (
    <QuestionStyledComponent>
      <Heading.H2>{title}</Heading.H2>
      {description && <p>{description}</p>}
    </QuestionStyledComponent>
  )
}
