import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = { 
  boxholder: '',
  boxSize: 0,
};

const MailboxForm = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  addbox(formData);
  navigate('/mailboxes');
};
const handleChange = ({ target }) => {
  setFormData({ ...formData, [target.name]: target.value });
};


  return (
    <main>
      <h1>New Mailbox</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxholder">Name of owner:</label>
        <input
          type="text"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
      
      <label htmlFor='boxSize-select'>Box Size:</label>
        <select
          id='boxSize-select'
          value={formData.boxSize}
          onChange={handleChange}
          
        />
      
      <button type="submit">Add Mailbox</button>
    </form>
</main> 

  );
};

export default MailboxForm;  