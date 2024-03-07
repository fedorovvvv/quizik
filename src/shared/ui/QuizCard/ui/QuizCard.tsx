import { ComponentProps, PropsWithChildren, memo } from 'react';
import Question from './Question';
import styled from 'styled-components';
import { Card } from '@shared/ui/Card';
import Answers from './Answers';

type Props = PropsWithChildren<{
  question: ComponentProps<typeof Question>;
  answers: ComponentProps<typeof Answers>['options'];
  answerValue?: ComponentProps<typeof Answers>['value'];
  onAnswerChange?: ComponentProps<typeof Answers>['onChange'];
  multiple?: boolean;
}>;

const QuizCardStyledComponent = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 510px;
`;

const QuizCardAnswersWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default memo(function QuizCard({
  answers,
  question,
  answerValue,
  onAnswerChange,
  multiple
}: Props) {
  return (
    <QuizCardStyledComponent>
      {question && <Question {...question} />}
      {answers?.length && (
        <QuizCardAnswersWrapper>
          <Answers
            options={answers}
            multiple={multiple}
            value={answerValue}
            onChange={onAnswerChange}
          />
        </QuizCardAnswersWrapper>
      )}
    </QuizCardStyledComponent>
  );
});
