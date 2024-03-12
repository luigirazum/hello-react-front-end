import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoading, isError, selectError } from '../redux/greetings/greetingsSelectors';

const Greeting = ({ message }) => {
  const loading = useSelector(isLoading);
  const error = useSelector(isError);
  const text = useSelector(selectError);

  if (error) return <p>{text}</p>;

  return (
    <>
      <h2>Greeting</h2>
      <p>
        <strong>Message: </strong>
        { loading
          ? <em>loading...</em>
          : message }
      </p>
    </>
  );
};

Greeting.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Greeting;
