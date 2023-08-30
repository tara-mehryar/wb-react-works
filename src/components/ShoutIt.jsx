import { useState } from 'react';

function unfocusAllFields(form) {
  Array.from(form.elements).forEach((el) => {
    el.blur();
  });
}

function ShoutIt() {
  const [message, setMessage] = useState('hello world');

  const shoutMessage = (e) => {
    e.preventDefault();
    unfocusAllFields(e.target);

    setMessage(message.toUpperCase());
    alert(message);
  };

  return (
    <form onSubmit={shoutMessage}>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">SHOUT IT IN ALL CAPS!</button>
    </form>
  );
}

export default ShoutIt;
