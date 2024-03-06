import { ComponentProps, PropsWithChildren } from 'react'
import Question from './Question'
import styled from 'styled-components'
import { Card } from '@shared/ui/Card'

type Props = PropsWithChildren<{
  question: ComponentProps<typeof Question>
}>

const QuizCardStyledComponent = styled(Card)`
  display: flex;
  width: 510px;
`

export default function QuizCard({ children, question }: Props) {
  return (
    <QuizCardStyledComponent>
      {question && <Question {...question} />}
      {children}
    </QuizCardStyledComponent>
  )
}
