import React from "react";
import { connect } from "react-redux";

import { addTask } from "../../redux/task/task.actions";

import "./task-list.styles.scss";
import { ReactComponent as ListIco } from "../../assets/list-ico.svg";

const TaskList = ({ task }) => {
  return (
    <div className="kavano-tasks-box">
      <a href="#" className="kavano-add-btn w-button">
        Add a Task
      </a>

      {task.taskItems.map((task) => {
        return (
          <div className="kavano-task-txt-container">
            <ListIco />
            <div className="kavano-task-title-sub-container">
              <div className="kavano-task-title">{task.title}</div>
              <div className="kavano-task-sub">{task.subtitle}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  task: state.task,
});

/*const mapDispatchToProps = (dispatch) => ({
  addTask: (newTask) => dispatch(addTask(newTask)),
});*/

export default connect(mapStateToProps)(TaskList);
