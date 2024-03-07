import * as Answer from '@entities/quiz/answer';

interface IQuestionModel {
  title: string;
  description?: string;
  answer: Answer.Model;
}

export class Model {
  title;
  description;
  answer;
  constructor({ title, description, answer }: IQuestionModel) {
    this.title = title;
    this.description = description;
    this.answer = answer;
  }
}
