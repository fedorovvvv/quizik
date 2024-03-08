import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@app/styles/global.css';
import '@app/styles/variables.css';
import { Provider } from 'react-redux';
import { mainStore } from '@app/stores/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={mainStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
