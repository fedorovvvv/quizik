import QuizEntity, { QuestionEntity } from '@entities/quiz';
import { ComponentProps } from 'react';

type Props = {
    data: QuestionEntity.Model;
    onAnswerChange?: ComponentProps<typeof QuizEntity.Answer.Group>['onChange'];
};
export default function Card({ data, onAnswerChange }: Props) {
    return (
        <QuizEntity.Question.Card
            question={{
                title: data.title,
                description: data.description
            }}>
            <QuizEntity.Answer.Group {...data.answer} onChange={onAnswerChange} />
        </QuizEntity.Question.Card>
    );
}
