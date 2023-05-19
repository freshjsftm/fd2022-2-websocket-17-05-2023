import React, {  useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import FormMessage from './components/FormMessage';
import ListMessages from './components/ListMessages';
import FormAuth from './components/FormAuth';

const App = () => {
  const { user } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.chat);
  useLayoutEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);
  return (
    <>
      {!user && <FormAuth />}
      {user && <h2>Hi, {user.login}</h2>}
      <ListMessages />
      <FormMessage />
    </>
  );
};

export default App;
