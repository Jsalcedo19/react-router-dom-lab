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
}



  return (
    <div>mailboxForm</div>
  )
}

export default MailboxForm  