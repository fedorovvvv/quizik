import { QuizFeature } from '@features/quiz';
import { configureStore } from '@reduxjs/toolkit';

export const mainStore = configureStore({
    reducer: {
        quiz: QuizFeature.Model.quizReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof mainStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof mainStore.dispatch;
