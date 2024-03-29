import Heading from '@shared/ui/Heading';
import { memo } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  description?: string;
};

const QuestionStyledComponent = styled.div`
  p {
    margin-top: 8px;
    font-size: 16px;
    white-space: pre-line;
  }
`;

export default memo(function Question({ title, description }: Props) {
  return (
    <QuestionStyledComponent>
      <Heading.H2>{title}</Heading.H2>
      {description && <p>{description}</p>}
    </QuestionStyledComponent>
  );
});
