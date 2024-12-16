
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <link to="/"><li>Home</li>
        </link>
        <link to="/mailboxes"><li>Mailbox</li>
        </link>
        <link to="/mailboxes/new"><li>New Mailbox</li>
        </link>
      </ul>
    </nav>
  );
};

export default Navbar;
