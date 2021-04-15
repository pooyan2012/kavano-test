import TaskActionTypes from "./task.types";

const INISTIAL_STATE = {
  tasks: [],
};

const taskReducer = (state = INISTIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default taskReducer;
