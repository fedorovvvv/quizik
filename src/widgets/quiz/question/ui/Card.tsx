import QuizEntity from '@entities/quiz';
import { ComponentProps, memo } from 'react';

type Props = {
    question: ComponentProps<typeof QuizEntity.Question.Card>['question'];
    answer: Omit<ComponentProps<typeof QuizEntity.Answer.Group>, 'onChange'>;
    onAnswerChange?: ComponentProps<typeof QuizEntity.Answer.Group>['onChange'];
};
export default memo(function Card({ question, answer, onAnswerChange }: Props) {
    return (
        <QuizEntity.Question.Card question={question}>
            <QuizEntity.Answer.Group {...answer} onChange={onAnswerChange} />
        </QuizEntity.Question.Card>
    );
});
