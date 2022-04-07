import { useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {modalIsOpen && <Modal onClose={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClose={closeModalHandler}/>}
    </div>
  );
};

export default Todo;
