import { QuestionEntity, QuizEntityModel } from '@entities/quiz';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IQuizState extends QuizEntityModel.IQuiz {}

const initialState: IQuizState = {
    name: '',
    questions: []
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        addQuestion(state, action: PayloadAction<QuestionEntity.IQuestion>) {
            state.questions.push(action.payload);
        },
        removeQuestion(state, action: PayloadAction<QuestionEntity.IQuestion['id']>) {
            state.questions = state.questions.filter(({ id }) => id !== action.payload);
        }
    }
});

// Action creators are generated for each case reducer function
export const { addQuestion, removeQuestion } = quizSlice.actions;
export const { reducer: quizReducer } = quizSlice;
