import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      {mailboxes.map(mailbox => (
        <div key={mailbox._id} className='mail-box'> {/* Correct key */}
          <Link to={`/mailboxes/${mailbox._id}`}>
            <h2>Mailbox {mailbox._id}</h2>
            <p>Boxholder: {mailbox.boxholder}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MailboxList;
