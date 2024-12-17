import { useState } from 'react';

const initialState = { 
  boxholder: '',  // Correct key name
  boxSize: '',
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addbox(formData);
    setFormData(initialState);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='boxholder'>Name of owner:</label>
        <input 
          type="text" 
          name='boxholder' 
          id='boxholder' 
          value={formData.boxholder} 
          onChange={handleChange}
        />

        <label htmlFor='boxSize-select'>What size of box?</label>
        <select 
          name="boxSize" 
          id="boxSize-select" 
          value={formData.boxSize} // Optional: to control the select value
          onChange={handleChange}
        >
          <option value="">-- Select size --</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type='submit'>Add mailbox</button>
      </form>
    </main>
  );
}

export default MailboxForm;