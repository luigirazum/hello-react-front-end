import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { selectMessage } from '../redux/greetings/greetingsSelectors';

const App = () => {
  const message = useSelector(selectMessage);

  return (
    <Routes>
      <Route index element={<Greeting message={message || 'no message'} />} />
    </Routes>
  );
};

export default App;
