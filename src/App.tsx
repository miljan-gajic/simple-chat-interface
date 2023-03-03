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

  // control the modal from the top most component
  const { isOpen, toggle } = useModal(!Boolean(author));

  // I have decided to prop-drill here instead of render-prop of have Child components
  // Because many people are afraid to prop drill these days but I say you do what the app complexity and robustness
  // dictates you to do. There is no need to do fancy stuff here
  return (
    <main className={classes.main}>
      <MessagesList toggleAuthorModal={toggle} />
      <AppBar />
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalContent toggleModal={toggle} />
      </Modal>
    </main>
  );
}

export default App;
