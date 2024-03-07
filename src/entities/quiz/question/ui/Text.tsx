import Heading from '@shared/ui/Heading';
import { memo } from 'react';
import styled from 'styled-components';
import { Model } from '../model';

type Props = {
  title: Model['title'];
  description?: Model['description'];
};

const QuestionTextStyledComponent = styled.div`
  p {
    margin-top: 8px;
    font-size: 16px;
    white-space: pre-line;
  }
`;

export default memo(function QuestionText({ title, description }: Props) {
  return (
    <QuestionTextStyledComponent>
      <Heading.H2>{title}</Heading.H2>
      {description && <p>{description}</p>}
    </QuestionTextStyledComponent>
  );
});
