import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
const { mailboxId } = useParams();
const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId)
);
if (!selectedBox) {
  return <h2>Mailbox not found</h2>;
};
  return (
    <div>
      <h2>mailboxDetails { selectedBox._id}</h2>
      <p>Boxsize: {selectedBox.boxsize}</p>
      <p>Boxholder: {selectedBox.boxholder}</p>
    </div>
  );
};

export default MailboxDetails