import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = () => {
const [boxholder, setBoxholder] = useState('');
const [boxsize, setBoxsize] = useState('');
const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  const newMailbox = { boxholder, boxsize };
  addbox(newMailbox);
  navigate('/mailboxes');
};



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder:
        <input
          type="text"
          value={boxholder}
          onChange={(event) => setBoxholder(event.target.value)}
        />
      </label>
      <label>
        Boxsize:
        <input
          type="text"
          value={boxsize}
          onChange={(event) => setBoxsize(event.target.value)}
        />
      </label>
      <button type="submit">Add Mailbox</button>
    </form>


  );
};

export default MailboxForm;  