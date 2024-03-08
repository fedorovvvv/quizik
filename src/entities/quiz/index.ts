import * as Answer from './answer';
import * as Question from './question';
import * as Model from './model';

const QuizEntity = {
    Question,
    Answer
};

export default QuizEntity;

export { Question as QuestionEntity, Answer as AnswerEntity, Model as QuizEntityModel };
