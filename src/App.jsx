import { useState } from 'react'
import Navbar from './components/Navbar';
import MailboxDetails from './components/mailboxDetails'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/mailboxForm'
import './App.css'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addbox = (newMailbox) => {
    newMailbox.id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/" element={<main><h1>Post Office</h1></main> } />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addbox={addbox}/>} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </div>
  );
};

export default App;
