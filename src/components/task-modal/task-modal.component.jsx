import React from "react";
import ReactModal from "react-modal";

import "./task-modal.styles.scss";

ReactModal.setAppElement("#task-modal");

class TaskModal extends React.Component {
  state = {
    showModal: false,
  };

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  render() {
    return (
      <>
        <button
          className="kavano-add-btn w-button"
          onClick={this.handleToggleModal}
        >
          Add a Task
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleToggleModal}
          className="task-modal"
          overlayClassName="task-overlay"
        >
          <div className="register-modal-closebtn-div">
            <button
              onClick={this.handleToggleModal}
              className="modal-close-btn"
            >
              x
            </button>
            <form onSubmit={this.handleSubmit}>
              <label>Title</label>
              <label>Subtitle</label>
              <label>Date</label>
              <button>submit</button>
            </form>
          </div>
        </ReactModal>
      </>
    );
  }
}

export default TaskModal;
