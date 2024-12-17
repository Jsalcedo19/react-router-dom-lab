import { useParams } from 'react-router-dom';
import React from 'react';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  // Ensure props.mailboxes is available
  const selectedBox = props.mailboxes?.find((mailbox) => String(mailbox._id) === mailboxId);

  return (
    <div>
      <h2>Mailbox Details</h2>

      {selectedBox ? (
        <>
          <p>Box Size: {selectedBox.boxsize}</p>
          <p>Box Holder: {selectedBox.boxholder}</p>
          <p>Mailbox ID: {selectedBox._id}</p>
        </>
      ) : (
        <p>Mailbox not found or does not exist.</p>
      )}
    </div>
  );
};

export default MailboxDetails;
