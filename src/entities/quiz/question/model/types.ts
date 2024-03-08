import { IAnswer } from '@entities/quiz/answer';

export interface IQuestion {
    id: string;
    title: string;
    description?: string;
    answers: IAnswer[];
}
