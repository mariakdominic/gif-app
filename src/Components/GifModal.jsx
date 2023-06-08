import React from "react";
import Modal from "react-modal";
import closeIcon from "../Icons/close_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/actions";

/**
 * 
 * @returns Modal Component
 */

const GifModal = () => {
  const modalIsOpen = useSelector((state) => state?.modal?.modalIsOpen);
  const selectedGif = useSelector((state) => state?.modal?.selectedGif);
  const dispatch = useDispatch();
  if (!selectedGif) {
    return <div></div>;
  }

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => dispatch(closeModal())} ariaHideApp={false}>
      <div className="gif-modal">
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          <img src={closeIcon} alt="close" />
        </button>
        <img
          className="modal-img"
          src={selectedGif.images.original.url}
          alt=""
        />
        {selectedGif.source !== "" ? (
          <p>
            <strong>Source:</strong>{" "}
            <a href={selectedGif.source}>{selectedGif.source}</a>
          </p>
        ) : (
          ""
        )}
        {selectedGif.username !== "" ? (
          <p>
            <strong>Username:</strong> {selectedGif.username}
          </p>
        ) : (
          ""
        )}
        <p>
          <strong>Rating:</strong> {selectedGif.rating}
        </p>
      </div>
    </Modal>
  );
};

export default GifModal;
