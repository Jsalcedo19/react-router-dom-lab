import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
  
return (
    <div>
      {mailboxes.map(mailbox => (
        <div key={mailboxes._id} className='mail-box'>
          <Link to={`/mailboxes/${mailbox._id}`}>
            <h2>Mailbox {mailbox._id}</h2>
            <p>Boxholder: {mailbox.boxholder}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MailboxList