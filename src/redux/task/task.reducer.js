import TaskActionTypes from "./task.types";

const INISTIAL_STATE = {
  taskItems: [{ title: "Test Task!", subtitle: "Today", date: "2" }],
};

const taskReducer = (state = INISTIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload],
      };
    default:
      return state;
  }
};

export default taskReducer;
