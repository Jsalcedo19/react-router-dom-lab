import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addbox = (newMailbox) => {
    newMailbox.id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addbox={addbox} />} />
        <Route
          path="/mailboxes/:id"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </div>
  );
};

export default App;
