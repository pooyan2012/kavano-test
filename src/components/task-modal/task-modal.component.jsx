import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import { addTask } from "../../redux/task/task.actions";

import "./task-modal.styles.scss";

ReactModal.setAppElement("#task-modal");

class TaskModal extends React.Component {
  state = {
    showModal: false,
    title: "",
    subtitle: "",
    date: "",
  };

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(JSON.stringify(this.state));
  // }

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleChange = (name) => (event) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, subtitle, date } = this.state;
    this.props.addTask({ title, subtitle, date });
    this.setState({
      showModal: true,
      title: "",
      subtitle: "",
      date: "",
    });
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
          <div>
            <button
              onClick={this.handleToggleModal}
              className="modal-close-btn"
            >
              x
            </button>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={this.state.title}
                onChange={this.handleChange("title")}
              />
              <label htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                value={this.state.subtitle}
                onChange={this.handleChange("subtitle")}
              />
              <label htmlFor="date">Date</label>
              <input
                type="number"
                min="1"
                max="30"
                id="date"
                value={this.state.date}
                onChange={this.handleChange("date")}
              />

              <button>submit</button>
            </form>
          </div>
        </ReactModal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (newTask) => dispatch(addTask(newTask)),
});

export default connect(undefined, mapDispatchToProps)(TaskModal);
