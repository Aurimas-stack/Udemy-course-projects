const Modal = (props) => {
  const handleConfirm = () => {
    props.onClose();
  };
  
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onClose}>
        Cancel
      </button>
      <button className="btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
