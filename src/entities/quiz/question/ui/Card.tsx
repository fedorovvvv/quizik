import { ComponentProps, PropsWithChildren, memo } from 'react';
import styled from 'styled-components';
import { Card } from '@shared/ui/Card';
import Text from './Text';

type Props = PropsWithChildren<{
  question: ComponentProps<typeof Text>;
  multiple?: boolean;
}>;

const QuestionCardStyledComponent = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 510px;
`;

const QuestionCardAnswersWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default memo(function QuizCard({ question, children }: Props) {
  return (
    <QuestionCardStyledComponent>
      {question && <Text {...question} />}
      {children && <QuestionCardAnswersWrapper>{children}</QuestionCardAnswersWrapper>}
    </QuestionCardStyledComponent>
  );
});
