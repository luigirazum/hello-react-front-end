import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import setupStore from './redux/store';
import { fetchRandom } from './redux/greetings/greetingsActions';
import reportWebVitals from './reportWebVitals';

const appStore = setupStore();

const rootTarget = document.getElementById('root');
const root = createRoot(rootTarget);

appStore.dispatch(fetchRandom());

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
