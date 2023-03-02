import AppBar from "components/AppBar/AppBar";
import MessagesList from "components/MessagesList/MessagesList";
import Modal from "components/Modal/Modal";
import ModalContent from "components/Modal/ModalContent/ModalContent";
import useModal from "hooks/modal";
import { useAuthor } from "store/authorContext";
import classes from "./App.module.css";

function App() {
  const {
    state: { author },
  } = useAuthor();

  const { isOpen, toggle } = useModal(!Boolean(author));

  return (
    <main className={classes.main}>
      <MessagesList />
      <AppBar />
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalContent toggleModal={toggle} />
      </Modal>
    </main>
  );
}

export default App;
